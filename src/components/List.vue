<template>
  <div>
    <h2>List</h2>
    <p>Listening state changes only</p>
    <ul>
      <li>Apple: <span>{{ $store.state.apple }}</span></li>
      <li>Banana: <span>{{ $store.state.banana }}</span></li>
      <li>Other: <span>{{ $store.state.other }}</span></li>
    </ul>
  </div>
</template>
