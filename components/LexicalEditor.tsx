import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
// @ts-ignore
import Toolbar from './plugins/ToolbarPlugin';


type LexicalEditorProps = {
    config: Parameters<typeof LexicalComposer>['0']['initialConfig'];
};

export function LexicalEditor(props: LexicalEditorProps) {
    return (
        <LexicalComposer initialConfig={props.config}>
            <div className="editor-container">
                <div className="editor-inner">
                    <Toolbar />
                    <RichTextPlugin
                        contentEditable={<ContentEditable />}
                        placeholder={<Placeholder />}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                </div>
            </div>
        </LexicalComposer>
    );
}

const Placeholder = () => {
    return (
        <div className="absolute top-[1.125rem] left-[1.125rem] opacity-50 text-3xl font-light">
            Content
        </div>
    );
};

export function Editor() {
    return (
        <div
            id="editor-wrapper"
            className={
                'relative prose prose-slate prose-p:my-0 prose-headings:mb-4 prose-headings:mt-2'
            }
        >
            <LexicalEditor
                config={{
                    namespace: 'lexical-editor',
                    theme: {
                        root: 'p-4 text-3xl font-light border-slate-500 bg-gray-50 border-0 rounded h-full min-h-[200px] focus:outline-none rounded-2xl',
                        link: 'cursor-pointer',
                        text: {
                            bold: 'font-semibold',
                            underline: 'underline',
                            italic: 'italic',
                            strikethrough: 'line-through',
                            underlineStrikethrough: 'underlined-line-through',
                        },
                    },
                    onError: error => {
                        console.log(error);
                    },
                }}
            />
        </div>
    );
}