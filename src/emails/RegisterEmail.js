module.exports.register = (username) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
        rel="stylesheet" />
      <title>Saba Embroidery - Contact Message</title>
      <style>
        @font-face {
          font-family: Montserrat;
          src: url("../fonts/Montserrat-Regular.ttf") format("woff2"),
            url("../fonts/Montserrat-Bold.ttf") format("woff");
          font-weight: normal;
          font-style: normal;
        }
        body {
          margin: 0;
          font-family: Montserrat, sans-serif;
        }
        table {
          border-spacing: 0;
        }
        td {
          padding: 0;
        }
        img {
          border: 0;
        }
        .wrapper {
          width: 100%;
          table-layout: fixed;
          padding-bottom: 60px;
        }
        .main {
          background-color: #ffffff;
          margin: 0 auto;
          width: 100%;
          max-width: 90%;
          border-spacing: 0;
          font-family: Montserrat;
          color: black;
          text-align: left;
        }
      </style>
    </head>
    <body>
      <center class="wrapper">
        <table
          class="main"
          width="100%"
          style="">
          <!-- LOGO SECTION -->
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td
                    style="
                      text-align: center;
                      padding: 1rem 0 0;
                      width: 100%;
                      max-width: 300px;
                      margin-bottom: 1rem;
                    ">
                    <a href="sabaembroidery.ma">
                      <img
                        src="https://drive.google.com/uc?export=download&id=1NNBtsCyJXXH2cPm68vt8edNNZguDYHH5"
                        alt="Saba Embroidery LOGO"
                        width="14%" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  
          <!-- BODY SECTION -->
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td class="tree-rows">
                    <table
                      class="row"
                      style="font-size: 18px; padding: 0 2rem; width: 100%">
                      </tr>
                      <tr
                        class="data"
                        style="
                          display: flex;
                          padding: 0.4rem 0;
                          width: 100%;
                          text-decoration: none;
                          color: #000;
                        ">
                        <td
                          style="
                            font-size: 16px;
                            width: 100%;
                            text-decoration: none;
                            color: black;
                            margin-left: 1rem;
                          ">
                          <span>Hello ${user.username},</span>
                          <p>
                            Welcome aboard! 🎉 We're delighted to have you join
                            SabaEmbroidery family. As you embark on your journey
                            with us, we want to extend our warmest greetings and
                            assure you that we're here to make your online
                            embroidery shopping experience truly exceptional.
                          </p>
                          <p>
                            At SabaEmbroidery, we're dedicated to providing you
                            with a seamless and enjoyable shopping experience for
                            all your embroidery needs, whether you're seeking
                            personalized gifts, custom apparel, or unique
                            embroidered items. With our wide range of embroidery
                            designs and user-friendly interface, bringing your
                            creative visions to life is just a few clicks away.
                          </p>
                          <p>
                            As a new member, you're now part of a vibrant
                            community of embroidery enthusiasts who trust us to
                            deliver quality embroidery products and excellent
                            service. We're committed to exceeding your
                            expectations at every turn.
                          </p>
                          <p>
                            To help you get started, feel free to explore our
                            website and discover our latest embroidery designs and
                            offerings. If you have any questions or need
                            assistance with your embroidery projects, our support
                            team is always ready to help. Don't hesitate to reach
                            out!
                          </p>
                          <p>
                            Once again, welcome to [Your Embroidery E-Commerce
                            Platform]. We're excited to have you join us, and we
                            look forward to being your go-to destination for all
                            things embroidery.
                          </p>
                          <p style="display: flex; flex-direction: column;">
                            <span>Best regards,</span>
                            <span>SabaEmbroidery Team </span>
                            </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>
    `;
};
