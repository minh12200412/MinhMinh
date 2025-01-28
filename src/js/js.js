// setTimeout(() => {
//   let sound = document.querySelector("#nhac");
//   if (sound) {
//     sound.muted = false; // Bật tiếng sau khi autoplay
//     sound
//       .play()
//       .then(() => {
//         console.log("Nhạc tự động phát thành công!");
//       })
//       .catch((error) => {
//         console.error("Không thể tự động phát nhạc:", error);
//       });
//   }
// }, 1000);
document
  .querySelector("#toggleCheckbox")
  .addEventListener("change", function (e) {
    const container = document.querySelector("#contentContainer");
    console.log("test");
    if (e.target.checked) {
      let sound = document.querySelector("#nhac");
      if (sound) {
        sound.muted = false; // Bật tiếng sau khi autoplay
        sound
          .play()
          .then(() => {
            console.log("Nhạc tự động phát thành công!");
          })
          .catch((error) => {
            console.error("Không thể tự động phát nhạc:", error);
          });
      }
      // Xóa các phần tử cũ
      container.classList.add("fade-out");
      setTimeout(() => {
        // Xóa nội dung cũ và thêm nội dung mới
        container.innerHTML = `
        <div class="sign">
        <span class="fast-flicker">M</span>YL<span class="flicker">O</span>VE
      </div>
          <div class="card fade-in">
           
            Trước khi năm mới đến! Anh muốn gửi đôi lời đến em. Người con gái anh thương
            ... Mặc dù thời gian chúng ta quen nhau con hơi ngắn ngủi, thời gian chúng ta bên nhau cũng
            chưa dài. Cảm ơn em vì đã xuất hiện trong thế giới của anh. Anh mong những điều
            tốt đẹp nhất sẽ luôn đến với em và sau này vẫn như vậy.
            Mong cho những năm tháng sau này chúng ta vẫn luôn cạnh nhau, yêu thương, lắng nghe,
            bao dung thứ tha cho nhau. Hãy luôn luôn cạnh nhau thật lâu, thật lâu em nha!. Anh mong rằng
            em biết một điều là Là Anh Thương Em...Yêu Em Lắm Á..❤️
          </div>
          <script src="/src/js/jstwo.js"></script>
        `;

        // Xóa lớp mờ dần và thêm lớp hiện dần (fade in)
        container.classList.remove("fade-out");
        const script = document.createElement("script");
        script.src = "../src/js/jstwo.js";
        script.type = "text/javascript";
        document.body.appendChild(script);
      }, 1000); // Thời gian trùng với hiệu ứng mờ dần
    }
  });
