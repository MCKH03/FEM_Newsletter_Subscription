"use strict";

export default function SuccessView() {
  return `
  <form class="success-box">
    <div class="top-box">
      <figure class="success-tick-box">
        <img class="tick" src="./assets/images/icon-list.svg" alt="Tick" />
      </figure>
      <h2 class="title">Thanks for subscribing!</h2>
      <p class="text">
        A confirmation email has been sent to
        <span class="sent-email">example@gmail.com</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
    </div>
    <button class="btn"><span>Dismiss message</span></button>
</form>`;
}
