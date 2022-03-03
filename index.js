export default function Elementish() {
  return new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric"});
}
