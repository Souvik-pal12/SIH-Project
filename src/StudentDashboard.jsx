import React, { useState, useEffect } from "react";
import studentLogo from "./souvikPal.jpg";
import {
  Search,
  Users,
  Bell,
  BookOpen,
  Trophy,
  Zap,
  Brain,
  Code,
  Atom,
  Calculator,
  Dna,
  MessageCircle,
  UserPlus,
  Check,
  X,
  Star,
  Play,
  Award,
  Target,
  Gamepad2,
} from "lucide-react";

const StudentDashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [friendsPanel, setFriendsPanel] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameInProgress, setGameInProgress] = useState(false);

  // Student data
  const student = {
    name: "Souvik pal",
    class: "12th Grade",
    email: "souvikpal.24@nsh.edu.in",
    avatar: studentLogo,
  };

  // Advanced games for higher classes (9-12)
  const advancedGames = {
    Physics: [
      {
        id: 1,
        name: "Quantum Mechanics Simulator",
        icon: Atom,
        difficulty: "Advanced",
        description:
          "Explore quantum phenomena through interactive simulations",
        color: "from-blue-500 to-purple-600",
      },
      {
        id: 2,
        name: "Electromagnetic Field Lab",
        icon: Zap,
        difficulty: "Expert",
        description: "Visualize and manipulate electromagnetic fields in 3D",
        color: "from-yellow-500 to-red-500",
      },
      {
        id: 3,
        name: "Relativity Explorer",
        icon: Target,
        difficulty: "Advanced",
        description:
          "Journey through spacetime and understand Einstein's theories",
        color: "from-indigo-500 to-blue-600",
      },
      {
        id: 4,
        name: "Wave Interference Studio",
        icon: Brain,
        difficulty: "Intermediate",
        description: "Create and analyze wave patterns and interference",
        color: "from-green-500 to-teal-500",
      },
    ],
    Mathematics: [
      {
        id: 5,
        name: "Calculus Visualization Engine",
        icon: Calculator,
        difficulty: "Advanced",
        description: "Interactive calculus concepts with real-time graphing",
        color: "from-purple-500 to-pink-600",
      },
      {
        id: 6,
        name: "3D Geometry Constructor",
        icon: Target,
        difficulty: "Expert",
        description: "Build and analyze complex 3D geometric structures",
        color: "from-orange-500 to-red-600",
      },
      {
        id: 7,
        name: "Statistics & Probability Lab",
        icon: Brain,
        difficulty: "Advanced",
        description: "Explore statistical concepts through data visualization",
        color: "from-blue-500 to-green-500",
      },
      {
        id: 8,
        name: "Linear Algebra Playground",
        icon: Calculator,
        difficulty: "Expert",
        description: "Matrix operations and transformations visualized",
        color: "from-teal-500 to-blue-500",
      },
    ],
    Biology: [
      {
        id: 9,
        name: "DNA Sequencing Challenge",
        icon: Dna,
        difficulty: "Advanced",
        description: "Decode genetic sequences and understand mutations",
        color: "from-green-500 to-emerald-600",
      },
      {
        id: 10,
        name: "Cell Division Simulator",
        icon: Target,
        difficulty: "Intermediate",
        description: "Watch mitosis and meiosis in stunning detail",
        color: "from-lime-500 to-green-600",
      },
      {
        id: 11,
        name: "Ecosystem Balance Game",
        icon: Brain,
        difficulty: "Advanced",
        description: "Manage complex ecological relationships",
        color: "from-emerald-500 to-teal-600",
      },
      {
        id: 12,
        name: "Protein Folding Lab",
        icon: Atom,
        difficulty: "Expert",
        description: "Predict and analyze protein structures",
        color: "from-green-600 to-blue-600",
      },
    ],
    Chemistry: [
      {
        id: 13,
        name: "Molecular Reaction Studio",
        icon: Atom,
        difficulty: "Advanced",
        description: "Design and simulate chemical reactions in 3D",
        color: "from-red-500 to-orange-600",
      },
      {
        id: 14,
        name: "Periodic Table Explorer",
        icon: Target,
        difficulty: "Intermediate",
        description: "Interactive periodic trends and element properties",
        color: "from-yellow-500 to-orange-500",
      },
      {
        id: 15,
        name: "Organic Chemistry Builder",
        icon: Brain,
        difficulty: "Expert",
        description: "Construct complex organic molecules",
        color: "from-pink-500 to-red-600",
      },
      {
        id: 16,
        name: "Thermodynamics Simulator",
        icon: Zap,
        difficulty: "Advanced",
        description: "Explore energy changes in chemical processes",
        color: "from-orange-500 to-red-500",
      },
    ],
    Reasoning: [
      {
        id: 17,
        name: "Logic Puzzle Master",
        icon: Brain,
        difficulty: "Advanced",
        description: "Solve complex logical reasoning challenges",
        color: "from-purple-500 to-indigo-600",
      },
      {
        id: 18,
        name: "Pattern Recognition Pro",
        icon: Target,
        difficulty: "Expert",
        description: "Advanced pattern analysis and prediction",
        color: "from-indigo-500 to-purple-600",
      },
      {
        id: 19,
        name: "Critical Thinking Arena",
        icon: Brain,
        difficulty: "Advanced",
        description: "Analyze arguments and logical fallacies",
        color: "from-blue-500 to-indigo-600",
      },
      {
        id: 20,
        name: "Mathematical Reasoning Lab",
        icon: Calculator,
        difficulty: "Expert",
        description: "Advanced mathematical problem-solving",
        color: "from-purple-600 to-pink-600",
      },
    ],
    Coding: [
      {
        id: 21,
        name: "Algorithm Visualizer Pro",
        icon: Code,
        difficulty: "Advanced",
        description: "Visualize complex algorithms and data structures",
        color: "from-gray-600 to-blue-600",
      },
      {
        id: 22,
        name: "AI Training Simulator",
        icon: Brain,
        difficulty: "Expert",
        description: "Train neural networks and understand ML concepts",
        color: "from-green-500 to-blue-600",
      },
      {
        id: 23,
        name: "Competitive Programming Arena",
        icon: Trophy,
        difficulty: "Expert",
        description: "Solve advanced programming challenges",
        color: "from-yellow-500 to-red-600",
      },
      {
        id: 24,
        name: "Full-Stack Project Builder",
        icon: Code,
        difficulty: "Advanced",
        description: "Build complete web applications step by step",
        color: "from-blue-500 to-purple-600",
      },
    ],
  };

  const subjects = Object.keys(advancedGames);

  // Friends system data
  const [friendsData, setFriendsData] = useState({
    friends: [
      {
        id: 1,
        name: "Sarah Chen",
        class: "12th",
        status: "online",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      },
      {
        id: 2,
        name: "Mike Wilson",
        class: "11th",
        status: "playing",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      },
      {
        id: 3,
        name: "Emma Davis",
        class: "12th",
        status: "offline",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      },
    ],
    pendingRequests: [
      {
        id: 4,
        name: "John Smith",
        class: "10th",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      },
      {
        id: 5,
        name: "Lisa Park",
        class: "12th",
        avatar:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=50&h=50&fit=crop&crop=face",
      },
    ],
    sentRequests: [
      {
        id: 6,
        name: "Tom Brown",
        class: "11th",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      },
    ],
  });

  const filteredGames = selectedSubject
    ? advancedGames[selectedSubject].filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const acceptFriend = (id) => {
    const request = friendsData.pendingRequests.find((r) => r.id === id);
    if (request) {
      setFriendsData((prev) => ({
        ...prev,
        friends: [...prev.friends, { ...request, status: "online" }],
        pendingRequests: prev.pendingRequests.filter((r) => r.id !== id),
      }));
      setNotifications((prev) => prev - 1);
    }
  };

  const rejectFriend = (id) => {
    setFriendsData((prev) => ({
      ...prev,
      pendingRequests: prev.pendingRequests.filter((r) => r.id !== id),
    }));
    setNotifications((prev) => prev - 1);
  };

  const playGame = (game) => {
    setSelectedGame(game);
    setGameInProgress(true);
    setTimeout(() => {
      setGameInProgress(false);
      setSelectedGame(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            EduGameHub
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Top Right Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFriendsPanel(!friendsPanel)}
            className="relative p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Users className="w-5 h-5" />
          </button>
          <button className="relative p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <Bell className="w-5 h-5" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
                {notifications}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Student Info */}
        <div className="w-80 bg-black/30 backdrop-blur-lg border-r border-white/10 p-6">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-0 ring-purple-500/50">
              <img
                src={student.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mb-1">{student.name}</h2>
            <p className="text-purple-300 mb-1">{student.class}</p>
            <p className="text-gray-400 text-sm">{student.email}</p>
          </div>

          {/* Subject Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
              Select Subject
            </h3>
            <div className="space-y-2">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`w-full p-3 rounded-lg text-left transition-all transform hover:scale-105 ${
                    selectedSubject === subject
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="flex items-center">
                    {subject === "Physics" && <Atom className="w-4 h-4 mr-3" />}
                    {subject === "Mathematics" && (
                      <Calculator className="w-4 h-4 mr-3" />
                    )}
                    {subject === "Biology" && <Dna className="w-4 h-4 mr-3" />}
                    {subject === "Chemistry" && (
                      <Atom className="w-4 h-4 mr-3" />
                    )}
                    {subject === "Reasoning" && (
                      <Brain className="w-4 h-4 mr-3" />
                    )}
                    {subject === "Coding" && <Code className="w-4 h-4 mr-3" />}
                    {subject}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4">
            <h3 className="font-semibold mb-3 flex items-center">
              <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
              Your Stats
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Games Completed:</span>
                <span className="text-green-400">24</span>
              </div>
              <div className="flex justify-between">
                <span>Current Streak:</span>
                <span className="text-blue-400">7 days</span>
              </div>
              <div className="flex justify-between">
                <span>Total Points:</span>
                <span className="text-purple-400">1,247</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {!selectedSubject ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <Gamepad2 className="w-24 h-24 mx-auto mb-6 text-purple-400 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome to Advanced Learning Games
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Select a subject from the sidebar to access cutting-edge
                  educational games designed for advanced learners. Each game
                  features interactive simulations, real-world applications, and
                  challenging scenarios.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg hover:from-white/20 hover:to-white/10 transition-all transform hover:scale-105 border border-white/10"
                    >
                      <div className="text-2xl mb-2">
                        {subject === "Physics" && (
                          <Atom className="w-8 h-8 mx-auto text-blue-400" />
                        )}
                        {subject === "Mathematics" && (
                          <Calculator className="w-8 h-8 mx-auto text-purple-400" />
                        )}
                        {subject === "Biology" && (
                          <Dna className="w-8 h-8 mx-auto text-green-400" />
                        )}
                        {subject === "Chemistry" && (
                          <Atom className="w-8 h-8 mx-auto text-red-400" />
                        )}
                        {subject === "Reasoning" && (
                          <Brain className="w-8 h-8 mx-auto text-indigo-400" />
                        )}
                        {subject === "Coding" && (
                          <Code className="w-8 h-8 mx-auto text-gray-400" />
                        )}
                      </div>
                      <p className="text-sm font-medium">{subject}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedSubject} Games
                </h2>
                <p className="text-gray-300">
                  Advanced interactive learning experiences for high school
                  students
                </p>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                  <div
                    key={game.id}
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${game.color} flex items-center justify-center mb-4`}
                    >
                      <game.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold mb-2">{game.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {game.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          game.difficulty === "Expert"
                            ? "bg-red-500/20 text-red-300"
                            : game.difficulty === "Advanced"
                            ? "bg-purple-500/20 text-purple-300"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {game.difficulty}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm">4.8</span>
                      </div>
                    </div>

                    <button
                      onClick={() => playGame(game)}
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center font-medium"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Friends Panel */}
        {friendsPanel && (
          <div className="w-80 bg-black/30 backdrop-blur-lg border-l border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Friends</h3>
              <button
                onClick={() => setFriendsPanel(false)}
                className="p-1 hover:bg-white/10 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Friend Requests */}
            {friendsData.pendingRequests.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-yellow-400 mb-3">
                  Pending Requests
                </h4>
                {friendsData.pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg mb-2"
                  >
                    <div className="flex items-center">
                      <img
                        src={request.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium">{request.name}</p>
                        <p className="text-xs text-gray-400">{request.class}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => acceptFriend(request.id)}
                        className="p-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => rejectFriend(request.id)}
                        className="p-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Friends List */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-green-400 mb-3">
                Friends ({friendsData.friends.length})
              </h4>
              {friendsData.friends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg mb-2 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={friend.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span
                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${
                          friend.status === "online"
                            ? "bg-green-500"
                            : friend.status === "playing"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                        }`}
                      ></span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{friend.name}</p>
                      <p className="text-xs text-gray-400">{friend.class}</p>
                    </div>
                  </div>
                  <button className="p-1 hover:bg-white/10 rounded">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Friend */}
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center font-medium">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Friend
            </button>
          </div>
        )}
      </div>

      {/* Game Loading Modal */}
      {gameInProgress && selectedGame && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/20 text-center">
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${selectedGame.color} flex items-center justify-center animate-pulse`}
            >
              <selectedGame.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Loading {selectedGame.name}
            </h3>
            <p className="text-gray-400 mb-4">
              Initializing advanced simulation...
            </p>
            <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;


