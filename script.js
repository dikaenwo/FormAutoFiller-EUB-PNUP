const choices = [4, 4, 3, 4, 3, 4, 3, 3, 3, 3, 4, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4];
function selectRadioButtonChoices() {
  choices.forEach((choice, index) => {
    const questionNumber = index + 1;
    const radioId = `b${questionNumber}_${choice}`;
    const radio = document.getElementById(radioId);
    if (radio) {
      radio.checked = true;
    } else {
      console.warn(`Radio button dengan ID ${radioId} tidak ditemukan`);
    }
  });
}

function fillTextSuggestions() {
  const saran1 = document.getElementById('jawabanSaran1');
  if (saran1) {
    saran1.value = 'Dosen memiliki pendekatan yang sangat komunikatif dan mampu menjelaskan materi dengan jelas.';
  } else {
    console.warn('Kolom teks untuk jawabanSaran1 tidak ditemukan');
  }
  const saran2 = document.getElementById('jawabanSaran2');
  if (saran2) {
    saran2.value = 'Semoga dapat terus meningkatkan inovasi dalam pembelajaran untuk mendukung pemahaman mahasiswa.';
  } else {
    console.warn('Kolom teks untuk jawabanSaran2 tidak ditemukan');
  }
}
selectRadioButtonChoices();
fillTextSuggestions();
