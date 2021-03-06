// @flow

type ReactNode = any
type LabelId = string

export type SequenceItem = { text: string, label?: LabelId, color?: string }
export type Label = {
  parent?: string,
  displayName?: string,
  description?: string,
  color: string,
  id: string
}

export type LabelDocumentProps = {
  type: "label-document",
  hotkeysEnabled?: boolean,
  labels: Array<Label>,
  multipleLabels?: boolean,
  document: string,
  initialLabels?: Array<string>,
  onChange: (Array<string> | string | null) => any
}

export type SequenceAnnotatorProps = {
  type: "label-sequence",
  hotkeysEnabled?: boolean,
  labels: Array<Label>,
  initialSequence?: Array<SequenceItem>,
  document: string,
  onChange: (sequence: Array<SequenceItem>) => any
}

export type TranscriberProps = {
  type: "transcribe",
  hotkeysEnabled?: boolean,
  audio: string,
  phraseBank?: Array<string>,
  validator?: string => Array<string>,
  initialTranscriptionText?: string,
  onChange: string => any
}

export type NLPAnnotatorProps = {
  ...
    | $Exact<SequenceAnnotatorProps>
    | $Exact<LabelDocumentProps>
    | $Exact<TranscriberProps>,
  onNext?: Function,
  onPrev?: Function,
  titleContent?: string | ReactNode,
  onFinish?: string,
  onChange?: string
}

export type Output =
  | {
      outputType: "label-document",
      document: string,
      labels: Array<LabelId>
    }
  | {
      outputType: "label-sequence",
      document: string,
      sequence: Array<SequenceItem>
    }
  | {
      outputType: "transcribe",
      audio: string,
      initialTranscriptionText?: string,
      transcription: string
    }
