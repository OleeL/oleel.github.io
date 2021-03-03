import { AppProps } from 'next/app'
import { useEffect } from 'react';
import GlobalStyles from '../components/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {

    useEffect(() => {
        
        const html = document.getElementsByTagName('html');
        if (html && html.length > 0) {
            html[0].setAttribute('lang', 'en');
        }

        document.title = "Oliver Legg";
    }, [])
    return(
        <>            
            <Component {...pageProps} />
            <style jsx>{GlobalStyles}</style>
        </>
    );
}

export default MyApp