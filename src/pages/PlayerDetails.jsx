import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { playersData } from '../data/players';
import { 
  ArrowLeft, 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar,
  Award,
  BarChart3,
  PieChart,
  Activity,
  MapPin,
  Zap,
  Shield
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const PlayerDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const player = playersData.find(p => p.id === parseInt(id));
  
  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Player not found</h2>
          <Link to="/players" className="btn-modern">
            Back to Players
          </Link>
        </div>
      </div>
    );
  }

  const getChartData = () => {
    switch (player.sport) {
      case 'Cricket':
        return [
          { name: 'Runs', value: player.runs, color: '#ef4444' },
          { name: 'Average', value: player.average * 100, color: '#f59e0b' },
          { name: 'Centuries', value: player.centuries * 100, color: '#10b981' },
          { name: 'Half Centuries', value: player.halfCenturies * 50, color: '#3b82f6' }
        ];
      case 'Football':
        return [
          { name: 'Goals', value: player.goals, color: '#ef4444' },
          { name: 'Assists', value: player.assists, color: '#10b981' },
          { name: 'Trophies', value: player.trophies * 10, color: '#f59e0b' }
        ];
      case 'Basketball':
        return [
          { name: 'Points', value: player.points, color: '#ef4444' },
          { name: 'Rebounds', value: player.rebounds, color: '#10b981' },
          { name: 'Assists', value: player.assists, color: '#f59e0b' }
        ];
      case 'Tennis':
        return [
          { name: 'Grand Slams', value: player.grandSlams * 100, color: '#ef4444' },
          { name: 'Titles', value: player.titles * 20, color: '#10b981' },
          { name: 'Weeks at #1', value: player.weeksAtNo1 * 5, color: '#f59e0b' }
        ];
      default:
        return [];
    }
  };

  const getPerformanceData = () => {
    if (player.sport === 'Cricket') {
      return [
        { metric: 'Batting Average', value: player.average, max: 100 },
        { metric: 'Strike Rate', value: player.stats.batting.strikeRate, max: 150 },
        { metric: 'Centuries', value: player.centuries, max: 50 },
        { metric: 'Half Centuries', value: player.halfCenturies, max: 100 }
      ];
    }
    return [];
  };

  const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Player Image */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Link to="/players" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Players
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{player.name}</h1>
                <div className="flex items-center space-x-4 text-lg text-gray-300">
                  <span className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {player.country}
                  </span>
                  <span>•</span>
                  <span className="text-red-400">{player.sport}</span>
                  <span>•</span>
                  <span>{player.position}</span>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">{player.age}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Age</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">{player.matches || player.games}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">{player.achievements.length}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {['overview', 'stats', 'achievements', 'highlights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold uppercase tracking-wider text-sm whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab
                    ? 'text-red-600 border-red-600'
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="container mx-auto px-4 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <Calendar className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <div className="stat-number">{player.age}</div>
                <div className="stat-label">Age</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Target className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <div className="stat-number">{player.matches || player.games}</div>
                <div className="stat-label">Matches/Games</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Trophy className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <div className="stat-number">{player.championships || player.titles || player.grandSlams}</div>
                <div className="stat-label">Major Titles</div>
              </div>
              <div className="glass-card p-6 text-center">
                <Award className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <div className="stat-number">{player.achievements.length}</div>
                <div className="stat-label">Achievements</div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Performance Overview</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={getChartData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                    labelStyle={{ color: '#f3f4f6' }}
                  />
                  <Bar dataKey="value" fill="#ef4444" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-red-600 mr-3" />
                  Key Statistics
                </h3>
                <div className="space-y-4">
                  {player.sport === 'Cricket' && (
                    <>
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-400">Total Runs</span>
                        <span className="text-xl font-bold text-white">{player.runs.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-400">Batting Average</span>
                        <span className="text-xl font-bold text-white">{player.average}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-400">Centuries</span>
                        <span className="text-xl font-bold text-white">{player.centuries}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-400">Half Centuries</span>
                        <span className="text-xl font-bold text-white">{player.halfCenturies}</span>
                      </div>
                    </>
                  )}
                  {player.sport === 'Football' && (
                    <>
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-400">Total Goals</span>
                        <span className="text-xl font-bold text-white">{player.goals}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-white/10">
                        <span className="text-gray-400">Assists</span>
                        <span className="text-xl font-bold text-white">{player.assists}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-400">Trophies</span>
                        <span className="text-xl font-bold text-white">{player.trophies}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  Career Highlights
                </h3>
                <div className="space-y-3">
                  {player.careerHighlights.slice(0, 4).map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white">Detailed Statistics</h3>
            
            {player.sport === 'Cricket' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="glass-card p-8">
                  <h4 className="text-xl font-bold text-white mb-6">Batting</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Runs</span>
                      <span className="text-xl font-bold text-white">{player.runs.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Average</span>
                      <span className="text-xl font-bold text-white">{player.average}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Strike Rate</span>
                      <span className="text-xl font-bold text-white">{player.stats.batting.strikeRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Centuries</span>
                      <span className="text-xl font-bold text-white">{player.centuries}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Half Centuries</span>
                      <span className="text-xl font-bold text-white">{player.halfCenturies}</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <h4 className="text-xl font-bold text-white mb-6">Bowling</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Wickets</span>
                      <span className="text-xl font-bold text-white">{player.stats.bowling.wickets}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Average</span>
                      <span className="text-xl font-bold text-white">{player.stats.bowling.average}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Economy</span>
                      <span className="text-xl font-bold text-white">{player.stats.bowling.economy}</span>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8">
                  <h4 className="text-xl font-bold text-white mb-6">Fielding</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Catches</span>
                      <span className="text-xl font-bold text-white">{player.stats.fielding.catches}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Run Outs</span>
                      <span className="text-xl font-bold text-white">{player.stats.fielding.runOuts}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Performance Radar Chart */}
            <div className="glass-card p-8">
              <h4 className="text-xl font-bold text-white mb-6">Performance Metrics</h4>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={getPerformanceData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                    labelStyle={{ color: '#f3f4f6' }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">Major Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {player.achievements.map((achievement, index) => (
                <div key={index} className="glass-card glass-card-hover p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">{achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'highlights' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">Career Highlights</h3>
            <div className="space-y-4">
              {player.careerHighlights.map((highlight, index) => (
                <div key={index} className="glass-card glass-card-hover p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-300 text-lg">{highlight}</span>
                    </div>
                    <div className="text-red-600 font-bold text-xl">#{index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PlayerDetails;
