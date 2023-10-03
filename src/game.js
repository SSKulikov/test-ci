export default function statusCharacter(params) {
  const { health } = params;
  if (health > 50) {
    return 'healthy';
  }
  if (health <= 50 && health >= 15) {
    return 'wounded';
  }

  return 'critical';
}
