const { Order, OrderProducts, Item, User } = require("../models");
const nodemailer = require("nodemailer");
const newOrderEmail = require("../emails/NewOrderEmail");

const createOrder = async (req, res) => {
  const client_id = req.user.id;
  const shippingInfos = req.body.shipping;
  const items = req.body.items;

  try {
    await Order.create({
      client_id,
      address: shippingInfos.address,
      phone: shippingInfos.phone,
      city: shippingInfos.city,
      zipCode: shippingInfos.postalCode,
      total: 0,
    }).then((response) => {
      if (!response) {
        console.log("Order doesn't created!");
      } else {
        // Create arrays
        let products_id = [];
        let quantities = [];
        let prices = [];
        let totals = [];
        items.forEach((item) => {
          products_id.push(item.item._id);
          quantities.push(item.quantity);
          prices.push(item.item.price);
          totals.push(item.quantity * item.item.price);
        });

        // create OredrProducts
        OrderProducts.create(
          {
            order_id: response._id,
            products_id,
            quantities,
            prices,
            totals,
          },
          (err, result) => {
            if (result) {
              // calculate total without shipping fees
              let Total = 0;
              totals.forEach((t) => {
                Total += t;
              });
              // add shipping fees
              Total += 40;

              // Update total in order
              Order.findByIdAndUpdate(
                response._id,
                { total: Total },
                (err, order) => {
                  if (order) {
                    const data = {
                      username: shippingInfos.name,
                      items,
                      shipping: 40,
                      total: Total,
                      status: response.status,
                    };

                    // Send email to admin
                    const transporter = nodemailer.createTransport({
                      service: "Gmail",
                      host: "smtp.gmail.com",
                      port: 465,
                      secure: true,
                      auth: {
                        user: "sabalarif97@gmail.com",
                        pass: "bjnzseuzjmzvomlv",
                      },
                    });

                    const mailOption = {
                      from: '"Saba Embroidery" <sabalarif97@gmail.com>',
                      to: `sabalarif97@gmail.com, ${shippingInfos.email}`,
                      subject: "Your Order Confirmation from SabaEmbroidery",
                      html: newOrderEmail.newOrder(data),
                    };

                    transporter.sendMail(mailOption, (error, info) => {
                      if (error) {
                        res.send(error);
                      } else {
                        console.log("Order sent!");
                        res.status(200).send({
                          messageSuccess: "Your order passed successfully",
                        });
                      }
                    });
                    // Send email to the client with the order information
                  }
                }
              );
            }
          }
        );
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

// get my orders
const getMyOrders = async (req, res) => {
  try {
    const user_id = req.user.id;
    let myOrders = await Order.find({ clinet_id: user_id })
      .populate({
        path: "client_id",
        select: "username email address phoneNum",
      })
      .populate({
        path: "item_id",
        select: "title description color images size price category_id",
      })
      .exec();
    res.status(200).send(myOrders);
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
};
