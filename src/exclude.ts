// when we want to exclude some type or literal
type EventHappend = "scroll" | "mouseMove" | "click" | "throwMouse";
type excludedEvent = Exclude<EventHappend, "scroll" | "throwMouse">;
function handleEvent(event: excludedEvent) {
  console.log(event);
}

handleEvent("click");
handleEvent("scroll");
