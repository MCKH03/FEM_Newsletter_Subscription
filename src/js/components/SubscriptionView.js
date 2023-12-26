"use strict";

export default function SubscriptionView() {
  return `
  <form class="main-box">
    <div class="content">
      <h1 class="title">Stay updated!</h1>
      <p class="text">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul class="list">
        <li class="list-item">
          <figure class="tick-box">
            <img
              src="./assets/images/icon-success.svg"
              alt="Tick"
              class="tick"
            />
          </figure>
          <span class="item-text"
            >Product discovery and building what matters</span
          >
        </li>
        <li class="list-item">
          <figure class="tick-box">
            <img
              src="./assets/images/icon-success.svg"
              alt="Tick"
              class="tick"
            />
          </figure>
          <span class="item-text"
            >Measuring to ensure updates are a success</span
          >
        </li>
        <li class="list-item">
          <figure class="tick-box">
            <img
              src="./assets/images/icon-success.svg"
              alt="Tick"
              class="tick"
            />
          </figure>
          <span class="item-text">And much more!</span>
        </li>
      </ul>
      <div class="input-box">
        <div class="label-box">
          <span class="label-input">Email address</span>
          <span class="label-error"></span>
        </div>
        <input type="text" class="input" placeholder="email@company.com"/>
      </div>
      <button class="btn">
        <span>Subscribe to monthly newsletter</span>
      </button>
    </div>
    <figure class="news-image"></figure>
</form>`;
}
