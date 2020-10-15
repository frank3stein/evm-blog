import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Theme from 'prism-react-renderer/themes/nightOwl';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={Theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <div style={{
                  display: 'table-cell',
                  textAlign: 'right',
                  paddingRight: '1em',
                  userSelect: 'none',
                  opacity: 0.5,
                }}>{i + 1}</div>
                <span style={{
                  display: 'table-cell',
                }}>
                  {
                    line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))
                  }
                </span>
              </div>
            ))}
          </pre>
        )
        }
      </Highlight >
    );
  }
};