<template>
  <div>
    <p>SmallAnimal</p>
    <p slot-scope="smallAnimalText1">{{smallAnimalText1.text }}</p>
    <slot>Name of small animan here</slot><!-- Name of... - alternative text if parent will not push text to this slot -->
  </div>
</template>
