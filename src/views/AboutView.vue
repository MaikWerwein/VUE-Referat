<template>
  <div class="about">
    <div>
      <h1>Our Goals</h1>
      <div class="grid">
        <div class="col-6">
          <div class="goalSection">
            <div class="title">1. Sustainable Infrastructure:</div>
            <div class="text">
              Green buildings and renewable energy ensure minimal environmental impact.
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="goalSection">
            <div class="title">2. Intelligent Transportation:</div>
            <div class="text">AI and IoT optimize traffic and public transportation.</div>
          </div>
        </div>
        <div class="col-6">
          <div class="goalSection">
            <div class="title">3. Connected Communities:</div>
            <div class="text">
              Smart homes and public Wi-Fi enhance connectivity and communication.
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="goalSection">
            <div class="title">4. Enhanced Public Services:</div>
            <div class="text">
              E-services and smart healthcare systems provide convenience and efficiency.
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="goalSection">
            <div class="title">5. Safety and Security:</div>
            <div class="text">Advanced surveillance and AI ensure a secure environment.</div>
          </div>
        </div>
        <div class="col-6">
          <div class="goalSection">
            <div class="title">6. Green Spaces and Recreation:</div>
            <div class="text">Parks and smart irrigation promote a healthy lifestyle.</div>
          </div>
        </div>
      </div>

      <h1 style="padding-top: 2rem">Contact Us</h1>
      <div class="contact">
        <div class="contact-options">
          <div class="contact-option">
            <div class="title">EITHER...</div>
            <div class="text">come by for a cup of Coffee</div>
          </div>
          <div class="contact-option">
            <div class="title">Or...</div>
            <div class="text">Contact us via city@smart</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-options {
  display: flex;
  flex-direction: row;
}

.contact-option {
  background-color: var(--color-border);
  margin: 8px;

  border-radius: 8px;

  transition: all 0.2s;

  &:hover {
    background-color: var(--color-accent);

    .title {
      background-image: linear-gradient(
        132deg,
        var(--color-accent-tradic-1),
        var(--color-accent-tradic-2)
      );
    }
  }

  .title {
    background-color: #f3ec78;
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    width: 100%;
    text-align: center;
    border-bottom: 1px solid currentColor;
    font-size: 200%;

    background-image: linear-gradient(132deg, var(--color-accent-tradic-1), var(--color-accent));
  }

  .text {
    padding: 8px 12px 12px 12px;
  }
}

.goalSection {
  border: 3px dotted var(--color-border);
  border-radius: 8px;
  padding: 5px;

  &:not(:hover) {
    transition: color 1s;
  }

  &:hover {
    color: var(--color-accent);
  }
}
</style>
