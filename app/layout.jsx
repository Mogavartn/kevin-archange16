"use client"
import { useEffect } from 'react';
import "./globals.css";
import { Suspense } from "react";
import { FacebookPixelEvents } from '@/components/pixel-events';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';
export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
            <script
            src="https://checkout.revolut.com/checkout.js" // Assurez-vous que ce lien est correct
            async
          />
                <script src="//app.quickreviewer.com/proof/webproof/qrv2.js" defer></script>
                <link rel='icon' type='image/png' href='../favicon.ico' />
                <script
                id="facebook-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
                    fbq('track', 'PageView');
                    `,
                }}
                />
            </head>
            <body>
                {children}
                <ToastContainer />
                {/* Suspense est utilisé pour charger Facebook Pixel sans bloquer le rendu */}
                <Suspense fallback={null}>
                    <FacebookPixelEvents />
                </Suspense>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_PIXEL_ID} />
            </body>
        </html>
    );
}