import { FunctionComponent } from 'react';
import Header from './Header';

const Layout: FunctionComponent = ({ children }) => (
    <>
        <Header />
        <div className="container mx-auto">
            {children}
        </div>
    </>
);

export default Layout;
