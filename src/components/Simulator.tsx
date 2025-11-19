import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Smile, 
  Sparkles, 
  Syringe, 
  ScanFace, 
  User, 
  Wind,
  Scan,
  Upload,
  Camera,
  ArrowRight,
  ArrowLeft,
  UserPlus,
  Check,
  Wand2
} from 'lucide-react';

interface Treatment {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: 'dental' | 'facial' | 'capilar';
  instructions: string[];
}

interface Patient {
  id: string;
  name: string;
  email: string;
}

const treatments: Treatment[] = [
  {
    id: 'facetas',
    icon: <Smile className="w-6 h-6" />,
    title: 'Facetas Dentárias',
    description: 'Transforme seu sorriso com facetas de porcelana',
    category: 'dental',
    instructions: [
      'A foto deve mostrar o sorriso completo com os dentes visíveis',
      'Certifique-se de que a boca está aberta e os dentes estão à mostra',
      'Boa iluminação frontal para capturar detalhes dos dentes',
      'Evite sombras na área da boca'
    ]
  },
  {
    id: 'clareamento',
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Clareamento Dentário',
    description: 'Dentes mais brancos e brilhantes',
    category: 'dental',
    instructions: [
      'Foto do sorriso com dentes visíveis em boa iluminação',
      'Posição frontal para melhor visualização',
      'Evite filtros ou ajustes de cor na foto original',
      'Lábios devem estar afastados dos dentes'
    ]
  },
  {
    id: 'implantes',
    icon: <Scan className="w-6 h-6" />,
    title: 'Implantes Dentários',
    description: 'Restaure dentes perdidos com naturalidade',
    category: 'dental',
    instructions: [
      'Foto com a boca aberta mostrando a área do implante',
      'Capture a região específica onde faltam dentes',
      'Boa iluminação para ver detalhes da gengiva',
      'Foto frontal ou lateral conforme a localização'
    ]
  },
  {
    id: 'botox',
    icon: <Syringe className="w-6 h-6" />,
    title: 'Botox',
    description: 'Suavize linhas de expressão e rejuvenesça',
    category: 'facial',
    instructions: [
      'Foto frontal do rosto em repouso',
      'Expressão neutra para visualizar linhas de expressão',
      'Iluminação uniforme sem sombras fortes',
      'Cabelo afastado do rosto para melhor visualização'
    ]
  },
  {
    id: 'harmonizacao',
    icon: <ScanFace className="w-6 h-6" />,
    title: 'Harmonização Facial',
    description: 'Equilíbrio e proporção do rosto',
    category: 'facial',
    instructions: [
      'Foto frontal com rosto centralizado',
      'Expressão neutra para análise de proporções',
      'Cabelo preso para visualizar toda a estrutura facial',
      'Fundo neutro e iluminação uniforme',
      'Foto adicional de perfil recomendada'
    ]
  },
  {
    id: 'rinomodelacao',
    icon: <Wind className="w-6 h-6" />,
    title: 'Rinomodelação',
    description: 'Contorno nasal sem cirurgia',
    category: 'facial',
    instructions: [
      'Foto frontal e de perfil obrigatórias',
      'Expressão neutra focando na área nasal',
      'Iluminação lateral para destacar contornos',
      'Fundo neutro para melhor definição'
    ]
  },
  {
    id: 'capilares',
    icon: <User className="w-6 h-6" />,
    title: 'Implantes Capilares',
    description: 'Recupere a densidade capilar',
    category: 'capilar',
    instructions: [
      'Foto frontal da linha capilar e topo da cabeça',
      'Cabelo seco e penteado para trás',
      'Boa iluminação superior para ver o couro cabeludo',
      'Fotos adicionais das áreas afetadas são recomendadas'
    ]
  }
];

const mockPatients: Patient[] = [
  { id: '1', name: 'Maria Silva', email: 'maria.silva@email.com' },
  { id: '2', name: 'João Santos', email: 'joao.santos@email.com' },
  { id: '3', name: 'Ana Costa', email: 'ana.costa@email.com' },
];

type Step = 'intro' | 'select-treatment' | 'select-patient' | 'upload-photo' | 'simulation';

export function Simulator() {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showNewPatientForm, setShowNewPatientForm] = useState(false);

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

  const handleSelectTreatment = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setCurrentStep('select-patient');
  };

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setCurrentStep('upload-photo');
  };

  const handleStartOver = () => {
    setCurrentStep('intro');
    setSelectedTreatment(null);
    setSelectedPatient(null);
    setShowNewPatientForm(false);
  };

  // Intro Screen
  if (currentStep === 'intro') {
    return (
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl mb-6">
            <Wand2 className="w-12 h-12 text-white" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-slate-900">
              Simulador de Intervenções Estéticas
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Visualize resultados realistas de procedimentos estéticos antes de qualquer intervenção. 
              Nossa tecnologia avançada permite simular diferentes tratamentos com precisão impressionante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">Análise Precisa</h3>
              <p className="text-slate-600">Mapeamento facial 3D para simulações realistas</p>
            </div>
            
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">IA Avançada</h3>
              <p className="text-slate-600">Resultados naturais com tecnologia de ponta</p>
            </div>
            
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 mx-auto">
                <ScanFace className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">Visualização Imediata</h3>
              <p className="text-slate-600">Veja antes e depois em tempo real</p>
            </div>
          </div>

          <Button 
            size="lg"
            onClick={() => setCurrentStep('select-treatment')}
            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg px-8 mt-8"
          >
            Nova Simulação
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    );
  }

  // Select Treatment Screen
  if (currentStep === 'select-treatment') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={handleStartOver}
            className="gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <h2 className="text-slate-900 mb-2">Escolha o Tratamento</h2>
          <p className="text-slate-600">Selecione o procedimento estético que deseja simular</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <button
              key={treatment.id}
              onClick={() => handleSelectTreatment(treatment)}
              className="group text-left p-6 rounded-2xl backdrop-blur-md bg-white/40 border border-white/20 shadow-lg hover:bg-white/60 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {treatment.icon}
                </div>
                <Badge variant="outline" className={getCategoryColor(treatment.category)}>
                  {treatment.category}
                </Badge>
              </div>
              
              <h3 className="text-slate-900 mb-2">{treatment.title}</h3>
              <p className="text-slate-600 mb-4">{treatment.description}</p>
              
              <div className="flex items-center gap-2 text-blue-600">
                <span>Selecionar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Select Patient Screen
  if (currentStep === 'select-patient' && selectedTreatment) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentStep('select-treatment')}
            className="gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
              {selectedTreatment.icon}
            </div>
            <div>
              <h2 className="text-slate-900">{selectedTreatment.title}</h2>
              <p className="text-slate-600">Selecione ou crie um paciente</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Existing Patients */}
          <div className="space-y-3">
            {mockPatients.map((patient) => (
              <button
                key={patient.id}
                onClick={() => handleSelectPatient(patient)}
                className="w-full flex items-center justify-between p-4 rounded-xl backdrop-blur-md bg-white/40 border border-white/20 hover:bg-white/60 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    {patient.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-slate-900">{patient.name}</p>
                    <p className="text-slate-600">{patient.email}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
              </button>
            ))}
          </div>

          {/* New Patient Button */}
          <Button
            onClick={() => setShowNewPatientForm(!showNewPatientForm)}
            variant="outline"
            className="w-full gap-2 backdrop-blur-sm bg-white/60 border-2 border-dashed hover:bg-white/80"
          >
            <UserPlus className="w-5 h-5" />
            Criar Novo Paciente
          </Button>

          {showNewPatientForm && (
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/60 border border-white/20 space-y-4">
              <h3 className="text-slate-900">Novo Paciente</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/20 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/20 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/20 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <Button className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Check className="w-4 h-4" />
                Criar e Continuar
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Upload Photo Screen
  if (currentStep === 'upload-photo' && selectedTreatment && selectedPatient) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentStep('select-patient')}
            className="gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
              {selectedTreatment.icon}
            </div>
            <div>
              <h2 className="text-slate-900">{selectedTreatment.title}</h2>
              <p className="text-slate-600">Paciente: {selectedPatient.name}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Area */}
          <div className="space-y-6">
            <div className="h-[500px] rounded-2xl backdrop-blur-md bg-white/40 border-2 border-dashed border-white/40 shadow-lg flex flex-col items-center justify-center gap-6 hover:bg-white/60 transition-all duration-300 cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-slate-900 mb-2">Adicione uma Foto</h3>
                <p className="text-slate-600 mb-6">Arraste e solte ou clique para fazer upload</p>
                <div className="flex gap-3 justify-center">
                  <Button onClick={() => setCurrentStep('simulation')} className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Upload className="w-4 h-4" />
                    Fazer Upload
                  </Button>
                  <Button onClick={() => setCurrentStep('simulation')} variant="outline" className="gap-2 backdrop-blur-sm bg-white/60">
                    <Camera className="w-4 h-4" />
                    Tirar Foto
                  </Button>
                </div>
              </div>
              <p className="text-slate-500">Formatos: JPG, PNG • Máximo 10MB</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/20">
              <h3 className="text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Instruções para Melhor Resultado
              </h3>
              <ul className="space-y-3">
                {selectedTreatment.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-slate-700">{instruction}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl backdrop-blur-md bg-blue-500/10 border border-blue-500/20">
              <p className="text-blue-800">
                💡 <strong>Dica:</strong> Quanto melhor a qualidade da foto, mais precisa será a simulação.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Simulation Result Screen
  if (currentStep === 'simulation' && selectedTreatment && selectedPatient) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={handleStartOver}
            className="gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Nova Simulação
          </Button>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                {selectedTreatment.icon}
              </div>
              <div>
                <h2 className="text-slate-900">{selectedTreatment.title}</h2>
                <p className="text-slate-600">Paciente: {selectedPatient.name}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="backdrop-blur-sm bg-white/60">
                Ajustar Parâmetros
              </Button>
              <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Check className="w-4 h-4" />
                Salvar Simulação
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl backdrop-blur-md bg-white/40 border border-white/20 shadow-lg overflow-hidden">
          <div className="grid grid-cols-2 gap-px bg-white/20">
            {/* Antes */}
            <div className="bg-white/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-900">Antes</h3>
              </div>
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <Camera className="w-16 h-16 text-slate-400" />
              </div>
            </div>
            
            {/* Depois */}
            <div className="bg-white/40 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-900">Depois</h3>
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <ScanFace className="w-16 h-16 text-purple-600 mx-auto mb-3" />
                  <p className="text-slate-700">Simulação aplicada</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white/40 border-t border-white/20">
            <h4 className="text-slate-900 mb-3">Ajustes de Intensidade</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700">Intensidade do Efeito</span>
                  <span className="text-slate-900">75%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  defaultValue="75"
                  className="w-full h-2 bg-white/40 rounded-full appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
