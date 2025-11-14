import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Search,
  Filter,
  Calendar,
  Download,
  Eye,
  Trash2,
  MoreVertical
} from 'lucide-react';

interface Simulation {
  id: string;
  patientName: string;
  treatment: string;
  date: string;
  status: 'completed' | 'pending' | 'approved';
  category: 'dental' | 'facial' | 'capilar';
}

const simulations: Simulation[] = [
  {
    id: '1',
    patientName: 'Maria Silva',
    treatment: 'Harmonização Facial',
    date: '14 Nov, 2025',
    status: 'completed',
    category: 'facial'
  },
  {
    id: '2',
    patientName: 'João Santos',
    treatment: 'Facetas Dentárias',
    date: '14 Nov, 2025',
    status: 'pending',
    category: 'dental'
  },
  {
    id: '3',
    patientName: 'Ana Costa',
    treatment: 'Botox',
    date: '13 Nov, 2025',
    status: 'approved',
    category: 'facial'
  },
  {
    id: '4',
    patientName: 'Pedro Oliveira',
    treatment: 'Clareamento Dentário',
    date: '13 Nov, 2025',
    status: 'completed',
    category: 'dental'
  },
  {
    id: '5',
    patientName: 'Rita Ferreira',
    treatment: 'Rinomodelação',
    date: '12 Nov, 2025',
    status: 'completed',
    category: 'facial'
  },
  {
    id: '6',
    patientName: 'Carlos Mendes',
    treatment: 'Implantes Capilares',
    date: '12 Nov, 2025',
    status: 'pending',
    category: 'capilar'
  },
  {
    id: '7',
    patientName: 'Lucia Rocha',
    treatment: 'Harmonização Facial',
    date: '11 Nov, 2025',
    status: 'approved',
    category: 'facial'
  },
  {
    id: '8',
    patientName: 'Miguel Alves',
    treatment: 'Implantes Dentários',
    date: '11 Nov, 2025',
    status: 'completed',
    category: 'dental'
  }
];

export function Simulations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'pending':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      case 'approved':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'pending':
        return 'Pendente';
      case 'approved':
        return 'Aprovado';
      default:
        return status;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'dental':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'facial':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'capilar':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por paciente ou tratamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl backdrop-blur-md bg-white/40 border border-white/20 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/60 transition-all"
            />
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 backdrop-blur-sm bg-white/60">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          <Button variant="outline" className="gap-2 backdrop-blur-sm bg-white/60">
            <Calendar className="w-4 h-4" />
            Data
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['all', 'completed', 'pending', 'approved'].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
              selectedFilter === filter
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'backdrop-blur-sm bg-white/40 text-slate-700 hover:bg-white/60'
            }`}
          >
            {filter === 'all' ? 'Todos' : getStatusLabel(filter)}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl backdrop-blur-md bg-white/40 border border-white/20">
          <p className="text-slate-600 mb-1">Total</p>
          <p className="text-slate-900">{simulations.length}</p>
        </div>
        <div className="p-4 rounded-xl backdrop-blur-md bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-700 mb-1">Concluídos</p>
          <p className="text-emerald-900">{simulations.filter(s => s.status === 'completed').length}</p>
        </div>
        <div className="p-4 rounded-xl backdrop-blur-md bg-orange-500/10 border border-orange-500/20">
          <p className="text-orange-700 mb-1">Pendentes</p>
          <p className="text-orange-900">{simulations.filter(s => s.status === 'pending').length}</p>
        </div>
        <div className="p-4 rounded-xl backdrop-blur-md bg-blue-500/10 border border-blue-500/20">
          <p className="text-blue-700 mb-1">Aprovados</p>
          <p className="text-blue-900">{simulations.filter(s => s.status === 'approved').length}</p>
        </div>
      </div>

      {/* Simulations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulations.map((simulation) => (
          <div
            key={simulation.id}
            className="group p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20 shadow-lg hover:bg-white/60 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                {simulation.patientName.charAt(0)}
              </div>
              <button className="p-2 rounded-lg hover:bg-white/60 transition-all opacity-0 group-hover:opacity-100">
                <MoreVertical className="w-4 h-4 text-slate-600" />
              </button>
            </div>
            
            <h4 className="text-slate-900 mb-1">{simulation.patientName}</h4>
            <p className="text-slate-600 mb-4">{simulation.treatment}</p>
            
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className={getStatusColor(simulation.status)}>
                {getStatusLabel(simulation.status)}
              </Badge>
              <Badge variant="outline" className={getCategoryColor(simulation.category)}>
                {simulation.category}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between text-slate-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{simulation.date}</span>
              </div>
            </div>
            
            {/* Preview Images */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-slate-200 to-slate-300" />
              <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-100 to-purple-100" />
            </div>
            
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button size="sm" variant="outline" className="flex-1 gap-2 backdrop-blur-sm bg-white/60">
                <Eye className="w-3 h-3" />
                Ver
              </Button>
              <Button size="sm" variant="outline" className="gap-2 backdrop-blur-sm bg-white/60">
                <Download className="w-3 h-3" />
              </Button>
              <Button size="sm" variant="outline" className="gap-2 backdrop-blur-sm bg-white/60 text-red-600 hover:text-red-700">
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
