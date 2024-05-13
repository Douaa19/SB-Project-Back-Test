module.exports.passwordReseted = (username, link) => {
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
                          <span>Hello ${username},</span>
                          <p>
                            Congratulations! Your password for your SabaEmbroidery account has been successfully reset. You're now all set to dive back into the world of online shopping with us.
                          </p>
                          <p>
                            To access your account and start exploring our latest offerings, simply click on the following link: <a href="${link}">SabaEmbroidery</a>.
                          </p>
                          <p>
                            Please ensure that you choose a strong and secure password to protect your account. Once you've reset your password, you'll be able to log in and resume your shopping experience with us.
                          </p>
                          <p>
                            We're delighted to have you back with us and hope you find everything you need to make your shopping experience enjoyable and convenient. Should you have any questions or require assistance while browsing our platform, please don't hesitate to reach out to our support team at embroidery.saba12@gmail.com.
                          </p>
                          <p>
                            Thank you for choosing SabaEmbroidery. We value your continued support and look forward to serving you again soon!
                          </p>
                          <p>
                            Happy shopping
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
  </html>`;
};
