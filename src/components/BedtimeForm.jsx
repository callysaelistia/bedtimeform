import { useState } from "react";

function BedtimeForm({ onCreatePlan, onCancel }) {
  const [name, setName] = useState("");
  const [bedtime, setBedtime] = useState("22:00");
  const [alarm, setAlarm] = useState("05:30");
  const [temperature, setTemperature] = useState(24);
  const [mood, setMood] = useState("Relaxed");
  const [mode, setMode] = useState("Deep Sleep");

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreatePlan({
      name: name.trim() || "Dreamer",
      bedtime,
      alarm,
      temperature,
      mood,
      mode,
    });
  };

  return (
    <section className="form-card">
      <div className="form-heading">
        <span className="form-icon">🌙</span>

        <div>
          <span className="small-title">NIGHT ROUTINE</span>
          <h1>Your Night Plan</h1>
          <p>Tell us how you want your night to feel.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>👤 Your Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="time-row">
          <div className="input-group">
            <label>🛏️ Sleep Time</label>

            <input
              type="time"
              value={bedtime}
              onChange={(e) => setBedtime(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>☀️ Wake Up</label>

            <input
              type="time"
              value={alarm}
              onChange={(e) => setAlarm(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>😊 How are you feeling tonight?</label>

          <div className="modes">
            {[
              ["😊", "Good"],
              ["😌", "Relaxed"],
              ["😴", "Tired"],
            ].map(([emoji, item]) => (
              <button
                type="button"
                key={item}
                className={
                  mood === item
                    ? "mode active-mode"
                    : "mode"
                }
                onClick={() => setMood(item)}
              >
                <span>{emoji}</span>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>🌡️ Room Temperature</label>

          <div className="temperature">
            <button
              type="button"
              onClick={() =>
                setTemperature((prev) =>
                  Math.max(16, prev - 1)
                )
              }
            >
              −
            </button>

            <strong>{temperature}°C</strong>

            <button
              type="button"
              onClick={() =>
                setTemperature((prev) =>
                  Math.min(30, prev + 1)
                )
              }
            >
              +
            </button>
          </div>
        </div>

        <div className="input-group">
          <label>😴 Sleep Atmosphere</label>

          <div className="modes">
            {[
              ["🌿", "Relax"],
              ["🌙", "Deep Sleep"],
              ["💤", "Cozy"],
            ].map(([emoji, item]) => (
              <button
                type="button"
                key={item}
                className={
                  mode === item
                    ? "mode active-mode"
                    : "mode"
                }
                onClick={() => setMode(item)}
              >
                <span>{emoji}</span>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Back
          </button>

          <button
            type="submit"
            className="start-button"
          >
            ✨ Create My Night Plan
          </button>
        </div>
      </form>
    </section>
  );
}

export default BedtimeForm;