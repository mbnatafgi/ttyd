import { ClipboardAddon, IClipboardProvider, ClipboardSelectionType } from '@xterm/addon-clipboard';

export class TmuxBrowserClipboardProvider implements IClipboardProvider {
  public async readText(selection: ClipboardSelectionType): Promise<string> {
    return navigator.clipboard.readText();
  }

  public async writeText(selection: ClipboardSelectionType, text: string): Promise<void> {
    text = text.trim();
    if (text === '') {
      return Promise.resolve();
    }
    return navigator.clipboard.writeText(text);
  }
}
