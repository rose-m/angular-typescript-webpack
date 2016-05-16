import 'es6-shim';

if (process.env.ENV === 'build') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
}
