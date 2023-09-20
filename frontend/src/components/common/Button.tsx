import { CommandBarButton, DefaultButton, IButtonProps, IButtonStyles, ICommandBarStyles } from "@fluentui/react";

interface ShareButtonProps extends IButtonProps {
    onClick: () => void;
  }

export const ShareButton: React.FC<ShareButtonProps> = ({onClick}) => {
    const shareButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
          width: 86,
          height: 32,
          borderRadius: 4,
          background: 'radial-gradient(109.81% 107.82% at 100.1% 90.19%, #0F6CBD 33.63%, #2D87C3 70.31%, #8DDDD8 100%)',
        //   position: 'absolute',
        //   right: 20,
          padding: '5px 12px',
          marginRight: '20px'
        },
        icon: {
          color: '#FFFFFF',
        },
        rootHovered: {
          background: 'linear-gradient(135deg, #0F6CBD 0%, #2D87C3 51.04%, #8DDDD8 100%)',
        },
        label: {
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
          color: '#FFFFFF',
        },
      };

      return (
        <CommandBarButton
                styles={shareButtonStyles}
                iconProps={{ iconName: 'Share' }}
                onClick={onClick}
                text="Share"
        />
      )
}

// ==========================================================================

interface Link1ButtonProps extends IButtonProps {
  onClick: () => void;
}

export const Link1Button: React.FC<Link1ButtonProps> = ({onClick, content}) => {
  const linkButtonStyles: ICommandBarStyles & IButtonStyles = {
      root: {
        // width: 86,
        height: 32,
        borderRadius: 4,
        // background: 'radial-gradient(109.81% 107.82% at 100.1% 90.19%, #0F6CBD 33.63%, #2D87C3 70.31%, #8DDDD8 100%)',
        background: '#00000000',
      //   position: 'absolute',
      //   right: 20,
        padding: '5px 12px',
        marginRight: '20px'
      },
      icon: {
        color: '#FFFFFF',
      },
      label: {
        fontWeight: 600,
        fontSize: 18,
        lineHeight: '20px',
        color: '#2b2967',
      },
      labelHovered: {
        fontSize: 18,
        lineHeight: '20px',
        color: '#af3db2',
      }
    };

    return (
      <CommandBarButton
              styles={linkButtonStyles}
              // iconProps={{ iconName: 'SharepointAppIcon16' }}
              onClick={onClick}
              text={content}
      />
    )
}

// ==========================================================================

interface HistoryButtonProps extends IButtonProps {
    onClick: () => void;
    text: string;
  }

export const HistoryButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
    const historyButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
            width: '180px',
            border: `1px solid #D1D1D1`,
            marginRight: '20px',
          },
          rootHovered: {
            border: `1px solid #D1D1D1`,
          },
          rootPressed: {
            border: `1px solid #D1D1D1`,
          },
      };

      return (
        <DefaultButton
            text={text}
            iconProps={{ iconName: 'History' }}
            onClick={onClick}
            styles={historyButtonStyles}
        />
      )
}