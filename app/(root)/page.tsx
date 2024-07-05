import HeaderBox from '../../components/HeaderBox';
import RightSidebar from '../../components/RightSideBar';
import TotalBalanceBox from '../../components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Adrian' };
  return (
    <div className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions"
          />

          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1223.5} />

          <RightSidebar user={loggedIn} />
        </header>
      </div>
    </div>
  );
};

export default Home;
