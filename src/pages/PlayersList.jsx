import { useState, useMemo } from 'react';
import  PlayerCard  from '../components/PlayerCard';
import { playersData, sportsCategories } from '../data/players';
import { Search, Filter, Grid, List } from 'lucide-react';

const PlayersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const filteredPlayers = useMemo(() => {
    return playersData.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           player.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSport = selectedSport === 'All' || player.sport === selectedSport;
      return matchesSearch && matchesSport;
    });
  }, [searchTerm, selectedSport]);

  const getStatDisplay = (player) => {
    switch (player.sport) {
      case 'Cricket':
        return `${player.runs.toLocaleString()} runs`;
      case 'Football':
        return `${player.goals} goals`;
      case 'Basketball':
        return `${player.points.toLocaleString()} points`;
      case 'Tennis':
        return `${player.grandSlams} Grand Slams`;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              All Players
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse and search through our elite database of legendary sports players
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search Bar */}
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search players by name or country..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                {/* Sport Filter */}
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent appearance-none"
                  >
                    {sportsCategories.map(sport => (
                      <option key={sport} value={sport} className="bg-gray-900">{sport}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count and View Toggle */}
              <div className="flex justify-between items-center mt-6">
                <div className="text-gray-300">
                  Showing <span className="text-red-600 font-bold">{filteredPlayers.length}</span> of <span className="text-white font-bold">{playersData.length}</span> players
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid/List */}
      <section className="container mx-auto px-4 pb-20">
        {filteredPlayers.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
            {filteredPlayers.map((player) => (
              viewMode === 'grid' ? (
                <PlayerCard key={player.id} player={player} />
              ) : (
                <div key={player.id} className="glass-card glass-card-hover p-6">
                  <div className="flex items-center space-x-6">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{player.name}</h3>
                          <div className="flex items-center space-x-3 text-gray-400 text-sm mb-3">
                            <span>{player.country}</span>
                            <span>•</span>
                            <span>{player.position}</span>
                            <span>•</span>
                            <span className="text-red-600">{player.sport}</span>
                          </div>
                        </div>
                        <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
                          Age {player.age}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Main Stat</div>
                          <div className="text-white font-bold">{getStatDisplay(player)}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Matches</div>
                          <div className="text-white font-bold">{player.matches || player.games}</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Achievements</div>
                          <div className="text-white font-bold">{player.achievements.length}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-400 text-sm">Active</span>
                        </div>
                        <button className="text-red-600 hover:text-red-500 font-semibold text-sm uppercase tracking-wider">
                          View Profile →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-6">
              <Search className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">No players found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSport('All');
              }}
              className="btn-secondary-modern"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default PlayersList;
