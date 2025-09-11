import { h, Component } from 'preact';

import { Terminal } from './terminal';

import type { ITerminalOptions, ITheme } from '@xterm/xterm';
import type { ClientOptions, FlowControl } from './terminal/xterm';

const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const path = window.location.pathname.replace(/[/]+$/, '');
const wsUrl = [protocol, '//', window.location.host, path, '/ws', window.location.search].join('');
const tokenUrl = [window.location.protocol, '//', window.location.host, path, '/token'].join('');
const clientOptions = {
    rendererType: 'webgl',
    disableLeaveAlert: false,
    disableResizeOverlay: false,
    enableZmodem: false,
    enableTrzsz: false,
    enableSixel: false,
    closeOnDisconnect: false,
    isWindows: false,
    unicodeVersion: '11',
} as ClientOptions;
const termOptions = {
    fontSize: 15,
    fontWeight: '400',
    allowTransparency: false,
    fontWeightBold: '400',
    fontFamily: 'Cascadia Mono,Consolas,Liberation Mono,Menlo,Courier,monospace',
    theme: {
        background: '#000000',
        black: '#0C0C0C',
        blue: '#0037DA',
        brightBlack: '#767676',
        brightBlue: '#3B78FF',
        brightCyan: '#61D6D6',
        brightGreen: '#16C60C',
        brightPurple: '#B4009E',
        brightRed: '#E74856',
        brightWhite: '#F2F2F2',
        brightYellow: '#F9F1A5',
        cursorColor: '#FFFFFF',
        cyan: '#3A96DD',
        foreground: '#ffffff',
        green: '#13A10E',
        name: 'Campbell (Copy)',
        purple: '#881798',
        red: '#C50F1F',
        selectionBackground: '#FFFFFF',
        white: '#CCCCCC',
        yellow: '#C19C00',
    } as ITheme,
    allowProposedApi: true,
} as ITerminalOptions;
const flowControl = {
    limit: 100000,
    highWater: 10,
    lowWater: 4,
} as FlowControl;

export class App extends Component {
    render() {
        return (
            <Terminal
                id="terminal-container"
                wsUrl={wsUrl}
                tokenUrl={tokenUrl}
                clientOptions={clientOptions}
                termOptions={termOptions}
                flowControl={flowControl}
            />
        );
    }
}
