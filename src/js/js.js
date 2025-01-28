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
          <div class="card fade-in">
            <div class="sign">
              <span class="fast-flicker">M</span>YL<span class="flicker">O</span>VE
            </div>
            Trước khi năm mới đến! Anh muốn gửi đôi lời đến em. Người con gái đặc biệt
            nhất đời anh... Mặc dù thời gian chúng ta quen nhau còn hơi ngắn ngủi.
            Nhưng anh cảm ơn em vì đã đến và là một phần hạnh phúc không thể thay thế
            trong năm nay của Anh. Mong rằng chúng ta sẽ luôn luôn hạnh phúc, yêu
            thương và luôn vì nhau như vậy thêm nhiều năm sau nữa nhé!
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
