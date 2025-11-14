import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Search,
  Filter,
  Plus,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  UserPlus,
  FileText
} from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  lastVisit: string;
  totalSimulations: number;
  status: 'active' | 'inactive' | 'pending';
  treatments: string[];
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    phone: '+351 912 345 678',
    lastVisit: '14 Nov, 2025',
    totalSimulations: 5,
    status: 'active',
    treatments: ['Harmonização Facial', 'Botox']
  },
  {
    id: '2',
    name: 'João Santos',
    email: 'joao.santos@email.com',
    phone: '+351 913 456 789',
    lastVisit: '14 Nov, 2025',
    totalSimulations: 3,
    status: 'pending',
    treatments: ['Facetas Dentárias']
  },
  {
    id: '3',
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '+351 914 567 890',
    lastVisit: '13 Nov, 2025',
    totalSimulations: 8,
    status: 'active',
    treatments: ['Botox', 'Rinomodelação', 'Harmonização Facial']
  },
  {
    id: '4',
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    phone: '+351 915 678 901',
    lastVisit: '13 Nov, 2025',
    totalSimulations: 2,
    status: 'active',
    treatments: ['Clareamento Dentário']
  },
  {
    id: '5',
    name: 'Rita Ferreira',
    email: 'rita.ferreira@email.com',
    phone: '+351 916 789 012',
    lastVisit: '12 Nov, 2025',
    totalSimulations: 4,
    status: 'active',
    treatments: ['Rinomodelação', 'Harmonização Facial']
  },
  {
    id: '6',
    name: 'Carlos Mendes',
    email: 'carlos.mendes@email.com',
    phone: '+351 917 890 123',
    lastVisit: '12 Nov, 2025',
    totalSimulations: 6,
    status: 'pending',
    treatments: ['Implantes Capilares']
  },
  {
    id: '7',
    name: 'Lucia Rocha',
    email: 'lucia.rocha@email.com',
    phone: '+351 918 901 234',
    lastVisit: '11 Nov, 2025',
    totalSimulations: 7,
    status: 'active',
    treatments: ['Harmonização Facial', 'Botox', 'Facetas Dentárias']
  },
  {
    id: '8',
    name: 'Miguel Alves',
    email: 'miguel.alves@email.com',
    phone: '+351 919 012 345',
    lastVisit: '10 Nov, 2025',
    totalSimulations: 1,
    status: 'inactive',
    treatments: ['Implantes Dentários']
  }
];

export function Patients() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'inactive':
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
      case 'pending':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'inactive':
        return 'Inativo';
      case 'pending':
        return 'Pendente';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar pacientes..."
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
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <UserPlus className="w-4 h-4" />
            Novo Paciente
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['all', 'active', 'pending', 'inactive'].map((filter) => (
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
          <p className="text-slate-900">{patients.length}</p>
        </div>
        <div className="p-4 rounded-xl backdrop-blur-md bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-emerald-700 mb-1">Ativos</p>
          <p className="text-emerald-900">{patients.filter(p => p.status === 'active').length}</p>
        </div>
        <div className="p-4 rounded-xl backdrop-blur-md bg-orange-500/10 border border-orange-500/20">
          <p className="text-orange-700 mb-1">Pendentes</p>
          <p className="text-orange-900">{patients.filter(p => p.status === 'pending').length}</p>
        </div>
        <div className="p-4 rounded-xl backdrop-blur-md bg-slate-500/10 border border-slate-500/20">
          <p className="text-slate-700 mb-1">Inativos</p>
          <p className="text-slate-900">{patients.filter(p => p.status === 'inactive').length}</p>
        </div>
      </div>

      {/* Patients Table/Cards */}
      <div className="space-y-3">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="group p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20 shadow-lg hover:bg-white/60 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              {/* Patient Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                  {patient.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-slate-900">{patient.name}</h4>
                    <Badge variant="outline" className={getStatusColor(patient.status)}>
                      {getStatusLabel(patient.status)}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-600">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{patient.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-slate-900 mb-1">{patient.totalSimulations}</p>
                  <p className="text-slate-600">Simulações</p>
                </div>
                
                <div className="hidden md:block">
                  <div className="flex items-center gap-1 text-slate-600 mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>Última Visita</span>
                  </div>
                  <p className="text-slate-900">{patient.lastVisit}</p>
                </div>
              </div>

              {/* Treatments Tags */}
              <div className="flex-1 hidden xl:flex flex-wrap gap-2">
                {patient.treatments.map((treatment, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg backdrop-blur-sm bg-blue-500/10 text-blue-600 border border-blue-500/20"
                  >
                    {treatment}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-2 backdrop-blur-sm bg-white/60">
                  <FileText className="w-3 h-3" />
                  Detalhes
                </Button>
                <Button size="sm" variant="ghost" className="backdrop-blur-sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Mobile Treatments Tags */}
            <div className="xl:hidden mt-4 flex flex-wrap gap-2">
              {patient.treatments.map((treatment, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg backdrop-blur-sm bg-blue-500/10 text-blue-600 border border-blue-500/20"
                >
                  {treatment}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
