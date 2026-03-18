import { Link } from 'react-router-dom';
import { playersData } from '../data/players';
import PlayerCard from '../components/PlayerCard';
import { ArrowRight, TrendingUp, BarChart3, Trophy } from 'lucide-react';

const Home = () => {
  const featuredPlayers = playersData.slice(0, 6);
  const topPerformers = playersData
    .sort((a, b) => {
      if (a.sport === 'Cricket') return b.runs - a.runs;
      if (a.sport === 'Football') return b.goals - a.goals;
      if (a.sport === 'Basketball') return b.points - a.points;
      if (a.sport === 'Tennis') return b.grandSlams - a.grandSlams;
      return 0;
    })
    .slice(0, 3);

  const sportsStats = [
    { name: 'Cricket', icon: '🏏', players: playersData.filter(p => p.sport === 'Cricket').length, color: 'from-orange-600 to-red-600' },
    { name: 'Football', icon: '⚽', players: playersData.filter(p => p.sport === 'Football').length, color: 'from-green-600 to-blue-600' },
    { name: 'Basketball', icon: '🏀', players: playersData.filter(p => p.sport === 'Basketball').length, color: 'from-orange-600 to-red-600' },
    { name: 'Tennis', icon: '🎾', players: playersData.filter(p => p.sport === 'Tennis').length, color: 'from-yellow-600 to-green-600' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/basketball.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center px-4 max-w-4xl">

    <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/40 rounded-full text-red-400 text-sm mb-6">
      Welcome to the Ultimate Sports Database
    </span>

    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
      SPORTS PLAYER
      <span className="block text-red-500">
        STATS & RECORDS
      </span>
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
      Explore comprehensive statistics, achievements and records of legendary sports players around the world.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

      <Link
        to="/players"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
      >
        Explore Players
      </Link>

      <Link
        to="/compare"
        className="border border-gray-500 hover:bg-gray-800 px-6 py-3 rounded-lg transition"
      >
        Compare Stats
      </Link>

    </div>

  </div>

</section>



      {/* Stats Overview */}
<section className="container mx-auto px-4 py-20">

<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white mb-4">
By The Numbers
</h2>

<p className="text-gray-400">
Comprehensive sports database at your fingertips
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="glass-card text-center p-8">
<div className="text-4xl font-bold text-red-500">
{playersData.length}
</div>
<p className="text-gray-400">Elite Players</p>
</div>

<div className="glass-card text-center p-8">
<div className="text-4xl font-bold text-red-500">4</div>
<p className="text-gray-400">Sports Categories</p>
</div>

<div className="glass-card text-center p-8">
<div className="text-4xl font-bold text-red-500">250+</div>
<p className="text-gray-400">Major Achievements</p>
</div>

<div className="glass-card text-center p-8">
<div className="text-4xl font-bold text-red-500">∞</div>
<p className="text-gray-400">Records Broken</p>
</div>

</div>

</section>

      {/* Popular Sports */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Popular Sports</h2>
          <p className="section-subtitle">Explore statistics across different sports</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsStats.map((sport) => (
            <div key={sport.name} className="glass-card glass-card-hover p-6 text-center group cursor-pointer">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${sport.color} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                {sport.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{sport.name}</h3>
              <p className="text-gray-400">{sport.players} Players</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Players - Asymmetric Layout */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="section-title">Featured Players</h2>
            <p className="section-subtitle">Legendary athletes who changed the game</p>
          </div>
          <Link to="/players" className="flex items-center text-red-600 hover:text-red-500 font-semibold uppercase tracking-wider text-sm">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlayerCard player={featuredPlayers[0]} size="large" />
          <PlayerCard player={featuredPlayers[1]} size="small" />
          <PlayerCard player={featuredPlayers[2]} size="small" />
          <PlayerCard player={featuredPlayers[3]} size="small" />
          <PlayerCard player={featuredPlayers[4]} size="large" />
          <PlayerCard player={featuredPlayers[5]} size="small" />
        </div>
      </section>

      {/* Top Performers */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Top Performers</h2>
          <p className="section-subtitle">The best of the best in their respective sports</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {topPerformers.map((player, index) => (
            <div key={player.id} className="glass-card glass-card-hover p-8">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-red-600">#{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{player.name}</h3>
                  <p className="text-gray-400 mb-3">{player.sport} • {player.country}</p>
                  <div className="flex items-center text-red-600">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span className="font-semibold">
                      {player.sport === 'Cricket' && `${player.runs.toLocaleString()} runs`}
                      {player.sport === 'Football' && `${player.goals} goals`}
                      {player.sport === 'Basketball' && `${player.points.toLocaleString()} points`}
                      {player.sport === 'Tennis' && `${player.grandSlams} Grand Slams`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Compare Players?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Use our advanced comparison tool to analyze statistics side by side
          </p>
          <Link to="/compare" className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
            <BarChart3 className="w-5 h-5 mr-2" />
            Compare Players Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
