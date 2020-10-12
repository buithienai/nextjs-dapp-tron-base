import React from 'react';
import Head from 'next/head';

const Index = () => {
    return (
        <>
            <Head>
                <title>Nextjs Dapp Tron</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="..../../static/images/favicon.ico" />
                <link rel="stylesheet" href="./../../static/css/main.css" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="wrap-error">
                <div>
                    <h1>404</h1>
                    <p>Error occurred! - File not Found</p>
                    <div className="sub">
                        <a href="/">
                            Back
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;