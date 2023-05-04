<!DOCTYPE html>
<html>
  <head>
    <title>Timer and Stopwatch</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Timer and Stopwatch</h1>

    <div class="timer-container">
      <h2>Timer</h2>
      <p>Time remaining: <span id="timer"></span></p>
      <button id="start-timer-btn">Start Timer</button>
      <button id="stop-timer-btn" disabled>Stop Timer</button>
    </div>

    <div class="stopwatch-container">
      <h2>Stopwatch</h2>
      <p>Elapsed time: <span id="stopwatch"></span></p>
      <button id="start-stopwatch-btn">Start Stopwatch</button>
      <button id="stop-stopwatch-btn" disabled>Stop Stopwatch</button>
    </div>

    <script src="timer.js"></script>
  </body>
</html>