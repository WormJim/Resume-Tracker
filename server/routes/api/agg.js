const pipeline = [
  {
    $project: {
      name: '$name',
      stage: '$stage',
      source: '$source',
      sourceSite: '$sourceSite',
    },
  },
];

module.exports = pipeline;
