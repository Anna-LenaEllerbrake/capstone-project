export function getUrl(topic) {
  const newTopic = topic.replace(/\s/g, '_')
  return newTopic
}

export function getTitleFromUrl(title) {
  return title.replace(/_/g, ' ')
}
