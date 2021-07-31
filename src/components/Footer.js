import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer
        class="page-footer"
        id="footer"
        // style={{
        //   backgroundColor: '#065471',
        //   color: '#FFC045',
        //   height: '50px',
        //   padding: '10px',
        // }}
      >
        <div class="">
          <div class="row">
            <div class="col l12 s12">
              <span
                style={{
                  textAlign: 'center',
                }}
                class="grey-text text-lighten-4"
              >
                Treasure&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                © 2021 Alin Draganescu
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
