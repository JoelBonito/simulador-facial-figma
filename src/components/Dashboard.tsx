import { Card } from './ui/card';
import { 
  Users, 
  Image, 
  TrendingUp, 
  Calendar,
  Activity,
  Clock
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      label: 'Total de Pacientes',
      value: '248',
      change: '+12%',
      trend: 'up',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Image className="w-5 h-5" />,
      label: 'Simulações Realizadas',
      value: '1,432',
      change: '+23%',
      trend: 'up',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: 'Procedimentos Concluídos',
      value: '186',
      change: '+8%',
      trend: 'up',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Agendamentos Hoje',
      value: '12',
      change: '0%',
      trend: 'neutral',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  const recentActivity = [
    {
      patient: 'Maria Silva',
      treatment: 'Harmonização Facial',
      date: '14 Nov, 2025',
      status: 'completed'
    },
    {
      patient: 'João Santos',
      treatment: 'Facetas Dentárias',
      date: '14 Nov, 2025',
      status: 'pending'
    },
    {
      patient: 'Ana Costa',
      treatment: 'Botox',
      date: '13 Nov, 2025',
      status: 'completed'
    },
    {
      patient: 'Pedro Oliveira',
      treatment: 'Clareamento Dentário',
      date: '13 Nov, 2025',
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20 shadow-lg hover:bg-white/60 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                {stat.icon}
              </div>
              <span className={`px-2 py-1 rounded-lg text-sm ${
                stat.trend === 'up' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-slate-500/10 text-slate-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-slate-600 mb-1">{stat.label}</p>
            <p className="text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900">Atividade Recente</h3>
            <Activity className="w-5 h-5 text-slate-400" />
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-white/40 border border-white/20 hover:bg-white/60 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    {activity.patient.charAt(0)}
                  </div>
                  <div>
                    <p className="text-slate-900">{activity.patient}</p>
                    <p className="text-slate-600">{activity.treatment}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {activity.date}
                  </p>
                  <span className={`inline-block px-2 py-1 rounded-lg text-sm mt-1 ${
                    activity.status === 'completed' 
                      ? 'bg-emerald-500/10 text-emerald-600' 
                      : 'bg-orange-500/10 text-orange-600'
                  }`}>
                    {activity.status === 'completed' ? 'Concluído' : 'Pendente'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 shadow-lg">
            <h4 className="text-slate-900 mb-4">Tratamentos Populares</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Harmonização Facial</span>
                <span className="text-slate-900">34%</span>
              </div>
              <div className="w-full h-2 bg-white/40 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600" style={{ width: '34%' }} />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Facetas Dentárias</span>
                <span className="text-slate-900">28%</span>
              </div>
              <div className="w-full h-2 bg-white/40 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: '28%' }} />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-700">Botox</span>
                <span className="text-slate-900">22%</span>
              </div>
              <div className="w-full h-2 bg-white/40 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: '22%' }} />
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20 shadow-lg">
            <h4 className="text-slate-900 mb-4">Agendamentos Próximos</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-slate-900">Hoje - 15:00</p>
                  <p className="text-slate-600">Ana Silva</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-purple-600" />
                <div>
                  <p className="text-slate-900">Hoje - 16:30</p>
                  <p className="text-slate-600">Carlos Mendes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <div>
                  <p className="text-slate-900">Amanhã - 10:00</p>
                  <p className="text-slate-600">Rita Ferreira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
