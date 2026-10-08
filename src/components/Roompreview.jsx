function calculateSleepDuration(bedtime, alarm) {
  const [bedHour, bedMinute] = bedtime
    .split(":")
    .map(Number);

  const [alarmHour, alarmMinute] = alarm
    .split(":")
    .map(Number);

  let start = bedHour * 60 + bedMinute;
  let end = alarmHour * 60 + alarmMinute;

  if (end <= start) {
    end += 24 * 60;
  }

  const duration = end - start;

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return {
    hours,
    minutes,
    total: duration,
  };
}

function RoomPreview({ plan, onEdit, onReset }) {
  const sleep = calculateSleepDuration(
    plan.bedtime,
    plan.alarm
  );

  let quality = "Needs More Sleep";
  let qualityIcon = "⚠️";

  if (sleep.total >= 420 && sleep.total <= 540) {
    quality = "Good Sleep";
    qualityIcon = "✨";
  } else if (sleep.total > 540) {
    quality = "Long Sleep";
    qualityIcon = "🌙";
  }

  return (
    <section className="preview-card">
      <div className="room">
        <div className="moon">☾</div>

        <div className="window">
          <div className="window-moon">☾</div>
          <div className="window-star">✦</div>
          <div className="window-star second">✧</div>
        </div>

        <div className="lamp">
          <div className="lamp-light"></div>
          <div className="lamp-shade"></div>
          <div className="lamp-stand"></div>
        </div>

        <div className="bed">
          <div className="pillow"></div>
          <div className="blanket"></div>
          <div className="bed-leg left"></div>
          <div className="bed-leg right"></div>
        </div>

        <div className="plant">
          🌿
        </div>

        <div className="floor"></div>
      </div>

      <div className="room-info">
        <span className="small-title">
          YOUR NIGHT PLAN
        </span>

        <h2>
          Good night, {plan.name}! 🌙
        </h2>

        <p className="mood-text">
          You're feeling {plan.mood.toLowerCase()} tonight.
        </p>

        <div className="status-list">
          <div>
            <span>🛏️ Sleep Time</span>
            <strong>{plan.bedtime}</strong>
          </div>

          <div>
            <span>☀️ Wake Up</span>
            <strong>{plan.alarm}</strong>
          </div>

          <div>
            <span>😴 Sleep Duration</span>
            <strong>
              {sleep.hours}h {sleep.minutes}m
            </strong>
          </div>

          <div>
            <span>🌡️ Temperature</span>
            <strong>{plan.temperature}°C</strong>
          </div>

          <div>
            <span>🌙 Atmosphere</span>
            <strong>{plan.mode}</strong>
          </div>
        </div>

        <div className="sleep-quality">
          <span>{qualityIcon}</span>

          <div>
            <small>Sleep Status</small>
            <strong>{quality}</strong>
          </div>
        </div>

        <div className="preview-actions">
          <button
            className="edit-button"
            onClick={onEdit}
          >
            ✏️ Edit Plan
          </button>

          <button
            className="reset-button"
            onClick={onReset}
          >
            ↻ New Night
          </button>
        </div>
      </div>
    </section>
  );
}

export default RoomPreview;