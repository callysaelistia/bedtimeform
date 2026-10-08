import { useState } from "react";
import "./App.css";
import BedtimeForm from "./components/BedtimeForm";
import RoomPreview from "./components/Roompreview"; 

function App() {
  const [showForm, setShowForm] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleStartNight = () => {
    setShowForm(true);
  };

  const handleCreatePlan = (data) => {
    setPlan(data);
    setShowForm(false);
  };

  const handleEditPlan = () => {
    setShowForm(true);
  };

  const handleReset = () => {
    setPlan(null);
    setShowForm(false);
  };

  return (
    <div className="app">
      <div className="stars">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
      </div>

      <header>
        <div className="logo">🌙 GoodNight</div>
        <p>Your personal bedtime routine</p>
      </header>

      <main className="container">
        {!showForm && !plan && (
          <section className="welcome-card">
            <div className="welcome-room">
              <div className="welcome-window">
                <span>☾</span>
                <small>✦</small>
                <small>✧</small>
              </div>

              <div className="welcome-moon">☾</div>

              <div className="welcome-lamp">
                <div className="lamp-glow"></div>
                <div className="lamp-shade"></div>
                <div className="lamp-stand"></div>
              </div>

              <div className="welcome-bed">
                <div className="welcome-pillow"></div>
                <div className="welcome-blanket"></div>
              </div>

              <div className="welcome-plant">🌿</div>
            </div>

            <div className="welcome-content">
              <span className="small-title">YOUR NIGHT ROUTINE</span>

              <h1>Ready for a<br />better night?</h1>

              <p>
                Create your personal sleep plan and prepare
                your room for a comfortable night.
              </p>

              <button
                className="start-button"
                onClick={handleStartNight}
              >
                🌙 Start My Night
              </button>
            </div>
          </section>
        )}

        {showForm && (
          <BedtimeForm
            onCreatePlan={handleCreatePlan}
            onCancel={() => setShowForm(false)}
          />
        )}

        {plan && !showForm && (
          <RoomPreview
            plan={plan}
            onEdit={handleEditPlan}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}

export default App;