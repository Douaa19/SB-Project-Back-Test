module.exports.resetPassword = (username, resetLink) => {
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
                              It seems you've forgotten your password for your SabaEmbroidery account. Not to worry! We're here to help you regain access.
                            </p>
                            <p>
                              To reset your password, simply click on the following link: <a href="${resetLink}">reset link</a>. This link will direct you to a page where you can create a new password for your account.
                            </p>
                            <p>
                              Please ensure that you choose a strong and secure password to protect your account. Once you've reset your password, you'll be able to log in and resume your shopping experience with us.
                            </p>
                            <p>
                              If you didn't request a password reset, please disregard this email. Your account security is important to us, and we take every measure to protect it.
                            </p>
                            <p>
                              If you encounter any issues or need further assistance, feel free to contact our support team at embroidery.saba12@gmail.com.
                            </p>
                            <p>
                              Thank you for choosing SabaEmbroidery. We appreciate your business and look forward to serving you again soon!
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
