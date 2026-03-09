import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, Trophy } from 'lucide-react';

const PlayerCard = ({ player, size = 'medium' }) => {
  const getMainStat = () => {
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

  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'md:col-span-2';
      case 'small':
        return '';
      default:
        return '';
    }
  };

  const getImageHeight = () => {
    switch (size) {
      case 'large':
        return 'h-80';
      case 'small':
        return 'h-48';
      default:
        return 'h-64';
    }
  };

  return (
    <Link to={`/player/${player.id}`} className={`block ${getSizeClasses()}`}>
      <div className="player-card-modern h-full">
        {/* Image Section */}
        <div className={`relative ${getImageHeight()} overflow-hidden`}>
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
          
          {/* Sport Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {player.sport}
            </span>
          </div>
          
          {/* Player Name Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{player.name}</h3>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{player.country}</span>
              <span>•</span>
              <span>{player.position}</span>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm uppercase tracking-wider mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Career Stat</span>
              </div>
              <div className="text-xl font-bold text-white">{getMainStat()}</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-sm uppercase tracking-wider mb-1">Age</div>
              <div className="text-xl font-bold text-white">{player.age}</div>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-300 text-sm">
                {player.achievements.length} Major Awards
              </span>
            </div>
            <div className="text-red-600 text-sm font-semibold uppercase tracking-wider">
              View Profile →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;
