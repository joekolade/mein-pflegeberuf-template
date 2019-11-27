<?php
namespace Joekolade\Meinpflegeberuf\ViewHelpers;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Configuration\ConfigurationManager;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;

class GooglejobViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper
{
  /**
   * @return void
   */
  public function initializeArguments()
  {
    parent::initializeArguments();
    $this->registerArgument('job', 'int', 'Uid of job', false);
  }

  /**
   * @return string
   */
  public function render()
  {
    /** @var ConfigurationManager $configurationManager */
    $configurationManager = GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Configuration\\ConfigurationManager');
    $googleJobsTs = $configurationManager->getConfiguration(
      \TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface::CONFIGURATION_TYPE_SETTINGS,
      'GoogleForJobs',
      'JobMeta');

      /** @var ContentObjectRenderer $cObj */
    $cObj = GeneralUtility::makeInstance('TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer');
    $renderObjName = '<tt_content.list.20.googleforjobs_job';
    $renderObjConf = $GLOBALS['TSFE']->tmpl->setup['tt_content.']['list.']['20.']['googleforjobs_job.'];

    $renderObjConf['settings'] = $googleJobsTs;
    $renderObjConf['settings']['job']['renderDetailTemplate'] = 0;
    $renderObjConf['settings']['job']['uid'] = (int)$this->arguments['job'];
    $renderObjConf['arguments']['job'] = (int)$this->arguments['job'];
    $renderObjConf['controller'] = 'Job';
    $renderObjConf['pluginName'] = 'JobMeta';

    return $cObj->cObjGetSingle($renderObjName, $renderObjConf);
  }
}
