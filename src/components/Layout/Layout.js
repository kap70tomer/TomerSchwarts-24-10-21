import React from 'react';
import AppRouter from '../AppRouter';
import Header from '../HeaderComponent/Header';
import ErrorNotification from '../NotificationsComponent/NotificationError';

 const Layout=()=>{
    return (
    <>
        <section className='Layout'>
            <header>
                <Header />
            </header>
            <main>
                <ErrorNotification />
                <AppRouter />
            </main>
        </section>
    </>
    )
}
export default Layout;
