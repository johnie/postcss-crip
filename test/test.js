const postcss = require('postcss');

const plugin = require('../');

const test = (input, output, opts, done) => {
  postcss([plugin(opts)])
    .process(input, { from: undefined })
    .then((result) => {
      expect(result.css).toEqual(output);
      expect(result.warnings()).toStrictEqual([]);
      done();
    })
    .catch((error) => {
      done(error);
    });
};

describe('postcss-crip', () => {
  it('handles background', (done) => {
    test('h1 { bg: #000; }', 'h1 { background: #000; }', {}, done);
  });

  it('handles background-color', (done) => {
    test('h1 { bgc: red; }', 'h1 { background-color: red; }', {}, done);
  });

  it('handles background-size', (done) => {
    test('h1 { bgz: cover; }', 'h1 { background-size: cover; }', {}, done);
  });

  it('handles border', (done) => {
    test(
      'h1 { bd: 1px solid red; }',
      'h1 { border: 1px solid red; }',
      {},
      done
    );
  });

  it('handles bottom', (done) => {
    test('h1 { b: 10px; }', 'h1 { bottom: 10px; }', {}, done);
  });

  it('handles color', (done) => {
    test('h1 { c: red; }', 'h1 { color: red; }', {}, done);
  });

  it('handles display', (done) => {
    test('h1 { d: block; }', 'h1 { display: block; }', {}, done);
  });

  it('handles float', (done) => {
    test('h1 { fl: left; }', 'h1 { float: left; }', {}, done);
  });

  it('handles font', (done) => {
    test(
      'h1 { f: 16px/14px Helvetica, serif red; }',
      'h1 { font: 16px/14px Helvetica, serif red; }',
      {},
      done
    );
  });

  it('handles font-family', (done) => {
    test(
      'h1 { ff: Helvetica, serif; }',
      'h1 { font-family: Helvetica, serif; }',
      {},
      done
    );
  });

  it('handles font-size', (done) => {
    test('h1 { fz: 12px; }', 'h1 { font-size: 12px; }', {}, done);
  });

  it('handles font-style', (done) => {
    test('h1 { fs: italic; }', 'h1 { font-style: italic; }', {}, done);
  });

  it('handles font-weight', (done) => {
    test('h1 { fw: bold; }', 'h1 { font-weight: bold; }', {}, done);
  });

  it('handles height', (done) => {
    test('h1 { h: 10px; }', 'h1 { height: 10px; }', {}, done);
  });

  it('handles left', (done) => {
    test('h1 { l: 10px; }', 'h1 { left: 10px; }', {}, done);
  });

  it('handles letter-spacing', (done) => {
    test('h1 { ls: 10px; }', 'h1 { letter-spacing: 10px; }', {}, done);
  });

  it('handles line-height', (done) => {
    test('h1 { lh: 10px; }', 'h1 { line-height: 10px; }', {}, done);
  });

  it('handles list-style', (done) => {
    test('h1 { li-s: inside; }', 'h1 { list-style: inside; }', {}, done);
  });

  it('handles max-height', (done) => {
    test('h1 { mah: 10px; }', 'h1 { max-height: 10px; }', {}, done);
  });

  it('handles min-height', (done) => {
    test('h1 { mih: 10px; }', 'h1 { min-height: 10px; }', {}, done);
  });

  it('handles max-width', (done) => {
    test('h1 { maw: 10px; }', 'h1 { max-width: 10px; }', {}, done);
  });

  it('handles min-width', (done) => {
    test('h1 { miw: 10px; }', 'h1 { min-width: 10px; }', {}, done);
  });

  it('handles margin', (done) => {
    test('h1 { m: 10px; }', 'h1 { margin: 10px; }', {}, done);
  });

  it('handles margin-top', (done) => {
    test('h1 { mt: 10px; }', 'h1 { margin-top: 10px; }', {}, done);
  });

  it('handles margin-right', (done) => {
    test('h1 { mr: 10px; }', 'h1 { margin-right: 10px; }', {}, done);
  });

  it('handles margin-bottom', (done) => {
    test('h1 { mb: 10px; }', 'h1 { margin-bottom: 10px; }', {}, done);
  });

  it('handles margin-left', (done) => {
    test('h1 { ml: 10px; }', 'h1 { margin-left: 10px; }', {}, done);
  });

  it('handles padding', (done) => {
    test('h1 { p: 10px; }', 'h1 { padding: 10px; }', {}, done);
  });

  it('handles padding-top', (done) => {
    test('h1 { pt: 10px; }', 'h1 { padding-top: 10px; }', {}, done);
  });

  it('handles padding-right', (done) => {
    test('h1 { pr: 10px; }', 'h1 { padding-right: 10px; }', {}, done);
  });

  it('handles padding-bottom', (done) => {
    test('h1 { pb: 10px; }', 'h1 { padding-bottom: 10px; }', {}, done);
  });

  it('handles padding-left', (done) => {
    test('h1 { pl: 10px; }', 'h1 { padding-left: 10px; }', {}, done);
  });

  it('handles right', (done) => {
    test('h1 { r: 10px; }', 'h1 { right: 10px; }', {}, done);
  });

  it('handles text-align', (done) => {
    test('h1 { ta: left; }', 'h1 { text-align: left; }', {}, done);
  });

  it('handles text-decoration', (done) => {
    test('h1 { td: none; }', 'h1 { text-decoration: none; }', {}, done);
  });

  it('handles text-indent', (done) => {
    test('h1 { ti: -9999px; }', 'h1 { text-indent: -9999px; }', {}, done);
  });

  it('handles text-transform', (done) => {
    test(
      'h1 { tt: uppercase; }',
      'h1 { text-transform: uppercase; }',
      {},
      done
    );
  });

  it('handles top', (done) => {
    test('h1 { t: 10px; }', 'h1 { top: 10px; }', {}, done);
  });

  it('handles vertical-align', (done) => {
    test('h1 { va: middle; }', 'h1 { vertical-align: middle; }', {}, done);
  });

  it('handles visibility', (done) => {
    test('h1 { v: hidden; }', 'h1 { visibility: hidden; }', {}, done);
  });

  it('handles width', (done) => {
    test('h1 { w: 10px; }', 'h1 { width: 10px; }', {}, done);
  });

  it('handles white-space', (done) => {
    test('h1 { ws: nowrap; }', 'h1 { white-space: nowrap; }', {}, done);
  });

  it('handles z-index', (done) => {
    test('h1 { zi: 1000; }', 'h1 { z-index: 1000; }', {}, done);
  });

  it('handles custom properties', (done) => {
    test(
      'h1 { az: far-right; }',
      'h1 { azimuth: far-right; }',
      {
        az: ['azimuth'],
      },
      done
    );
  });
});
