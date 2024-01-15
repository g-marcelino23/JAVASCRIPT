function setAlarm() {
  const hour = parseInt(document.getElementById("hour").value);
  const minute = parseInt(document.getElementById("minute").value);
  const message = document.getElementById("message").value;

  if (isNaN(hour) || isNaN(minute) || message === "") {
      alert("Por favor, insira valores válidos.");
      return;
  }

  const now = new Date();
  const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);

  let timeUntilAlarm = alarmTime - now;

  if (timeUntilAlarm < 0) {
      alarmTime.setDate(alarmTime.getDate() + 1);
      timeUntilAlarm = alarmTime - now;
  }

  document.getElementById("alarmStatus").innerHTML = "Alarme definido para: " + alarmTime.toLocaleTimeString() + " com a mensagem: " + message;

  const alarmInterval = setInterval(function () {
      if (new Date() >= alarmTime) {
          alert(message);
          clearInterval(alarmInterval);

          document.getElementById("hour").value = "";
          document.getElementById("minute").value = "";
          document.getElementById("message").value = "";

          document.getElementById("alarmStatus").innerHTML = "Alarme desativado";
      }
  }, 1000);
}
