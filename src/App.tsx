import { useState } from 'react';
import { Button } from './components/ui/button';
import { 
  LayoutDashboard, 
  Images, 
  Users,
  Settings,
  ScanFace
} from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Simulator } from './components/Simulator';
import { Simulations } from './components/Simulations';
import { Patients } from './components/Patients';

type Page = 'simulator' | 'dashboard' | 'simulations' | 'patients';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('simulator');

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'simulator':
        return <Simulator />;
      case 'simulations':
        return <Simulations />;
      case 'patients':
        return <Patients />;
      default:
        return <Simulator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      {/* Header with discrete navigation */}
      <header className="relative z-10 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => setCurrentPage('simulator')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <ScanFace className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">FaceSimulator</h1>
              </div>
            </button>

            {/* Discrete Navigation Buttons */}
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setCurrentPage('simulations')}
                className={`gap-2 text-slate-600 hover:text-slate-900 hover:bg-white/40 ${
                  currentPage === 'simulations' ? 'bg-white/40 text-slate-900' : ''
                }`}
              >
                <Images className="w-4 h-4" />
                <span className="hidden sm:inline">Simulações</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setCurrentPage('patients')}
                className={`gap-2 text-slate-600 hover:text-slate-900 hover:bg-white/40 ${
                  currentPage === 'patients' ? 'bg-white/40 text-slate-900' : ''
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Pacientes</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setCurrentPage('dashboard')}
                className={`gap-2 text-slate-600 hover:text-slate-900 hover:bg-white/40 ${
                  currentPage === 'dashboard' ? 'bg-white/40 text-slate-900' : ''
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>

              <div className="w-px h-6 bg-white/20 mx-2" />
              
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-2 text-slate-600 hover:text-slate-900 hover:bg-white/40"
              >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Configurações</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {renderContent()}
      </main>
    </div>
  );
}