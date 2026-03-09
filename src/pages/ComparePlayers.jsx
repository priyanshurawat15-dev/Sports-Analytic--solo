import { useState } from 'react';
import { playersData } from '../data/players';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, ArrowRight, TrendingUp, Trophy, BarChart3 } from 'lucide-react';

const ComparePlayers = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const selectedPlayer1 = playersData.find(p => p.id === parseInt(player1));
  const selectedPlayer2 = playersData.find(p => p.id === parseInt(player2));

  const getComparisonData = () => {
    if (!selectedPlayer1 || !selectedPlayer2) return [];

    const getMainStat = (player) => {
      switch (player.sport) {
        case 'Cricket': return player.runs;
        case 'Football': return player.goals;
        case 'Basketball': return player.points;
        case 'Tennis': return player.grandSlams * 100;
        default: return 0;
      }
    };

    const getMatches = (player) => player.matches || player.games || 0;
    const getTitles = (player) => player.championships || player.titles || player.grandSlams || 0;

    return [
      {
        metric: 'Main Stat',
        [selectedPlayer1.name]: getMainStat(selectedPlayer1),
        [selectedPlayer2.name]: getMainStat(selectedPlayer2),
      },
      {
        metric: 'Matches',
        [selectedPlayer1.name]: getMatches(selectedPlayer1),
        [selectedPlayer2.name]: getMatches(selectedPlayer2),
      },
      {
        metric: 'Titles',
        [selectedPlayer1.name]: getTitles(selectedPlayer1),
        [selectedPlayer2.name]: getTitles(selectedPlayer2),
      },
      {
        metric: 'Achievements',
        [selectedPlayer1.name]: selectedPlayer1.achievements.length,
        [selectedPlayer2.name]: selectedPlayer2.achievements.length,
      },
    ];
  };

  const getDetailedComparison = () => {
    if (!selectedPlayer1 || !selectedPlayer2) return [];

    return [
      {
        category: 'Basic Info',
        player1: {
          'Age': selectedPlayer1.age,
          'Sport': selectedPlayer1.sport,
          'Country': selectedPlayer1.country,
          'Position': selectedPlayer1.position,
        },
        player2: {
          'Age': selectedPlayer2.age,
          'Sport': selectedPlayer2.sport,
          'Country': selectedPlayer2.country,
          'Position': selectedPlayer2.position,
        }
      },
      {
        category: 'Performance',
        player1: selectedPlayer1.sport === 'Cricket' ? {
          'Runs': selectedPlayer1.runs,
          'Average': selectedPlayer1.average,
          'Centuries': selectedPlayer1.centuries,
        } : selectedPlayer1.sport === 'Football' ? {
          'Goals': selectedPlayer1.goals,
          'Assists': selectedPlayer1.assists,
        } : selectedPlayer1.sport === 'Basketball' ? {
          'Points': selectedPlayer1.points,
          'Rebounds': selectedPlayer1.rebounds,
          'Assists': selectedPlayer1.assists,
        } : {
          'Grand Slams': selectedPlayer1.grandSlams,
          'Titles': selectedPlayer1.titles,
        },
        player2: selectedPlayer2.sport === 'Cricket' ? {
          'Runs': selectedPlayer2.runs,
          'Average': selectedPlayer2.average,
          'Centuries': selectedPlayer2.centuries,
        } : selectedPlayer2.sport === 'Football' ? {
          'Goals': selectedPlayer2.goals,
          'Assists': selectedPlayer2.assists,
        } : selectedPlayer2.sport === 'Basketball' ? {
          'Points': selectedPlayer2.points,
          'Rebounds': selectedPlayer2.rebounds,
          'Assists': selectedPlayer2.assists,
        } : {
          'Grand Slams': selectedPlayer2.grandSlams,
          'Titles': selectedPlayer2.titles,
        }
      }
    ];
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Compare Players
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select two players to compare their statistics and achievements side by side
            </p>
          </div>
          
          {/* Player Selection */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Player 1 Selection */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Select First Player
                </h3>
                <select
                  value={player1}
                  onChange={(e) => setPlayer1(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none"
                >
                  <option value="" className="bg-gray-900">Choose a player...</option>
                  {playersData.map(player => (
                    <option key={player.id} value={player.id} className="bg-gray-900">
                      {player.name} ({player.sport}, {player.country})
                    </option>
                  ))}
                </select>
                
                {selectedPlayer1 && (
                  <div className="mt-6 p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedPlayer1.image}
                        alt={selectedPlayer1.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-white font-bold">{selectedPlayer1.name}</h4>
                        <p className="text-gray-400 text-sm">{selectedPlayer1.sport} • {selectedPlayer1.country}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Player 2 Selection */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Select Second Player
                </h3>
                <select
                  value={player2}
                  onChange={(e) => setPlayer2(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none"
                >
                  <option value="" className="bg-gray-900">Choose a player...</option>
                  {playersData.map(player => (
                    <option key={player.id} value={player.id} className="bg-gray-900">
                      {player.name} ({player.sport}, {player.country})
                    </option>
                  ))}
                </select>
                
                {selectedPlayer2 && (
                  <div className="mt-6 p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={selectedPlayer2.image}
                        alt={selectedPlayer2.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-white font-bold">{selectedPlayer2.name}</h4>
                        <p className="text-gray-400 text-sm">{selectedPlayer2.sport} • {selectedPlayer2.country}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Results */}
      {selectedPlayer1 && selectedPlayer2 && (
        <section className="container mx-auto px-4 py-12">
          {/* VS Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-8">
              <div className="text-center">
                <img
                  src={selectedPlayer1.image}
                  alt={selectedPlayer1.name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-red-600"
                />
                <h3 className="text-2xl font-bold text-white mt-4">{selectedPlayer1.name}</h3>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">VS</span>
                </div>
              </div>
              
              <div className="text-center">
                <img
                  src={selectedPlayer2.image}
                  alt={selectedPlayer2.name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-blue-600"
                />
                <h3 className="text-2xl font-bold text-white mt-4">{selectedPlayer2.name}</h3>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="glass-card p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 text-red-600 mr-3" />
              Performance Comparison
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={getComparisonData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="metric" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#f3f4f6' }}
                />
                <Bar dataKey={selectedPlayer1.name} fill="#ef4444" radius={[8, 8, 0, 0]} />
                <Bar dataKey={selectedPlayer2.name} fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed Comparison Table */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="w-6 h-6 text-red-600 mr-3" />
              Detailed Comparison
            </h3>
            <div className="space-y-8">
              {getDetailedComparison().map((section, index) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-white mb-4">{section.category}</h4>
                  <div className="space-y-3">
                    {Object.keys(section.player1).map((key) => (
                      <div key={key} className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-lg">
                        <div className="font-medium text-white">{key}</div>
                        <div className="text-center">
                          <span className="text-red-600 font-bold">
                            {typeof section.player1[key] === 'number' 
                              ? section.player1[key].toLocaleString() 
                              : section.player1[key]}
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-blue-600 font-bold">
                            {typeof section.player2[key] === 'number' 
                              ? section.player2[key].toLocaleString() 
                              : section.player2[key]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!selectedPlayer1 || !selectedPlayer2 && (
        <section className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="text-gray-400 mb-8">
              <Users className="w-24 h-24 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Select Two Players to Compare</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose two players from the dropdown menus above to see their detailed side-by-side comparison with interactive charts and statistics.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default ComparePlayers;
