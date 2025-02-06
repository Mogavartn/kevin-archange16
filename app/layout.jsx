"use client"
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
                <script src="//app.quickreviewer.com/proof/webproof/qrv2.js" defer></script>
                <link rel='icon' type='image/png' href='../favicon.ico' />
                {/* Code Meta Pixel */}
                <script
                dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push
                    (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);
                    t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                    fbq('track', 'PageView');
                    `,
                }}
                />
                <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
                />
                </noscript>
                {/* Fin du code méta-pixel */}
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}