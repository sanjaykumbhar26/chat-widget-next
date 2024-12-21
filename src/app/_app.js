import '../styles/globals.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script
                id="crisp-chat"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "your_crisp_website_id";
            (function() {
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
