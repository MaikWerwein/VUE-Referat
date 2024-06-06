<template>
  <div class="item">
    <i>
      <slot></slot>
    </i>
  </div>
</template>

<style scoped>
.item {
  cursor: pointer;

  margin-top: 2rem;
  display: flex;
  min-height: 80px;
  position: absolute;
  align-items: center;
  width: 0px;

  &:hover > i {
    color: var(--color-text-hover);
  }
}

i {
  transition: 0.2s;

  display: flex;
  place-items: center;
  place-content: center;

  border: 1px solid var(--color-border);

  color: var(--color-text);

  top: calc(50% - 25px);
  left: -26px;
  position: absolute;

  background: var(--color-background);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}

.item:before {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:after {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item {
  margin-top: 0;
  padding: 0;
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}
</style>
