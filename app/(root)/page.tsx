import HeaderBox from '../../components/HeaderBox';
import RightSidebar from '../../components/RightSideBar';
import TotalBalanceBox from '../../components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Adrian' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1223.5} />
        </header>
        {/* 
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 122.33 }, { currentBalance: 122.33 }]} />
    </section>
  );
};

export default Home;
